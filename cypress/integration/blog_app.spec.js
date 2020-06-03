/* eslint-disable no-undef */

/// <reference types="cypress" />

describe('Blog app', function () {
    beforeEach(function () {
        cy.request('POST', 'http://localhost:3001/api/testing/reset')
        const user = {
            name: 'Richard',
            username: 'Richard',
            password: 'Richard'
        }
        cy.request('POST', 'http://localhost:3001/api/users/', user)
        cy.visit('http://localhost:3000')
    })
    it('front page can be opened', function () {
        cy.contains('Login')
    })
    it('login form can open', function () {
        cy.contains('Login').click()
    })
    it('login fails with wrong password', function () {
        cy.contains('Login').click()
        cy.get('#username').type('Richard')
        cy.get('#password').type('wrong')
        cy.get('#submit-login').click()

        cy.contains('Sorry, please check that you typed your username and password correctly')
    })
    it('user can log in', function () {
        cy.contains('Login').click()
        cy.get('#username').type('Richard')
        cy.get('#password').type('Richard')
        cy.get('#submit-login').click()
        cy.contains('Richard logged in')
    })
    describe('when logged in', function () {
        beforeEach(function () {
            cy.request('POST', 'http://localhost:3001/api/login', {
                username: 'Richard', password: 'Richard'
            }).then(response => {
                localStorage.setItem('loggedBlogUser', JSON.stringify(response.body))
                cy.visit('http://localhost:3000')
            })
        })
        it('a new blog can be created', function () {
            cy.contains('add blog').click()
            cy.get('#title').type('Teetle')
            cy.get('#author').type('EEthor')
            cy.get('#url').type('Eeurl.com')
            cy.contains('Create').click()
            cy.contains('Teetle')
        })
        it('a user can like a blog', function () {
            cy.contains('add blog').click()
            cy.get('#title').type('Teetle')
            cy.get('#author').type('EEthor')
            cy.get('#url').type('Eeurl.com')
            cy.contains('Create').click()
            cy.contains('show').click()
            cy.contains('like').click()
        })
        it('user can delete their own blog', function () {
            cy.contains('add blog').click()
            cy.get('#title').type('Teetle')
            cy.get('#author').type('EEthor')
            cy.get('#url').type('Eeurl.com')
            cy.contains('Create').click()
            cy.contains('show').click()
            cy.contains('delete').click()
        })
    })
})
