import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

test('renders title and author', () => {
    const user = {
        name: 'Richard'
    }
    const blog = {
        title: 'Sample Blog Title',
        author: 'Test Author',
        user: { name: 'Richard' },
        url: 'sampleurl.com',
        likes: 10
    }

    const component = render(
        <Blog blog={blog} user={user} />
    )

    expect(component.container).toHaveTextContent(
        'Sample Blog Title'
    )
    expect(component.container).toHaveTextContent(
        'Test Author'
    )
})
test('do not show url or likes by default', () => {
    const user = {
        name: 'Richard'
    }
    const blog = {
        title: 'Sample Blog Title',
        author: 'Test Author',
        user: { name: 'Richard' },
        url: 'sampleurl.com',
        likes: 10
    }

    const component = render(
        <Blog blog={blog} user={user} />
    )

    const div = component.container.querySelector('.blogShort')
    expect(div).not.toHaveTextContent(
        'sampleurl.com'
    )
})
test('show url and likes with toggle', () => {
    const user = {
        name: 'Richard'
    }
    const blog = {
        title: 'Sample Blog Title',
        author: 'Test Author',
        user: { name: 'Richard' },
        url: 'sampleurl.com',
        likes: 10
    }

    const component = render(
        <Blog blog={blog} user={user} />
    )

    const div = component.container.querySelector('.toggleDiv')
    expect(div).toHaveTextContent(
        'sampleurl.com'
    )
    expect(div).toHaveTextContent(
        10
    )
})
test('like button clicked twice, event handler called twice', () => {
    const user = {
        name: 'Richard'
    }
    const blog = {
        title: 'Sample Blog Title',
        author: 'Test Author',
        user: { name: 'Richard' },
        url: 'sampleurl.com',
        likes: 10
    }
    const mockHandler = jest.fn()
    const component = render(
        <Blog blog={blog} user={user} upLike={mockHandler} />
    )

    const button = component.getByText('like')
    fireEvent.click(button)
    fireEvent.click(button)
    expect(mockHandler.mock.calls).toHaveLength(2)
})