import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavLink } from 'react-bootstrap'
import Logout from './Logout'

const Menu = (props) => {
    const { user, setLoggedIn } = props
    return (
        <div id='nav'>
            <Navbar expand='lg' bg='dark' variant='dark'>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav id='navbar' className='mr-auto'>
                        <NavLink href="#" as="span">
                            <Link to='/blogs' >blogs</Link>
                        </NavLink>
                        <NavLink href="#" as="span">
                            <Link to='/users' >users</Link>
                        </NavLink>
                        <Nav id='loggedInNotice'>
                            {user.username} logged in
                    </Nav>
                        <Logout
                            setLoggedIn={setLoggedIn} />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default Menu