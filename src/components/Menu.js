import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavLink } from 'react-bootstrap'

const Menu = () => {
    return (
        <Navbar expand='lg' bg='dark' variant='dark'>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='mr-auto'>
                    <NavLink href="#" as="span">
                        <Link to='/blogs' >blogs</Link>
                    </NavLink>
                    <NavLink href="#" as="span">
                        <Link to='/users' >users</Link>
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Menu