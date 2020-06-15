import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { badLogin, goodLogin, reset } from '../reducers/notificationReducer'
import loginService from '../services/login'
import blogService from '../services/blogs'
import { setUser } from '../reducers/userReducer'
import { Form, FormLabel, FormControl, FormGroup, Button } from 'react-bootstrap'

const Login = (props) => {
    const { setLoggedIn } = props
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleChangeUser = (event) => {
        setUsername(event.target.value)
    }
    const handleChangePass = (event) => {
        setPassword(event.target.value)
    }
    const submitLogin = async event => {
        event.preventDefault()
        try {
            const user =
                await loginService.login({ username, password })
            window.localStorage.setItem(
                'loggedBlogUser', JSON.stringify(user)
            )
            blogService.setToken(user.token)
            dispatch(setUser(user))
            setLoggedIn(true)
            dispatch(goodLogin())
            setTimeout(() => {
                dispatch(reset())

            }, 1000)
            setUsername('')
            setPassword('')
            console.log(user)
        }
        catch (error) {
            dispatch(badLogin())
            setTimeout(() => {
                dispatch(reset())
            }, 3000)
        }
    }
    return (
        <div className='container'>
            <h2>Login</h2>
            <Form onSubmit={submitLogin}>
                <FormGroup>
                    <FormLabel>Username:</FormLabel>
                    <FormControl onChange={handleChangeUser} value={username}></FormControl>
                    <FormLabel>Password:</FormLabel> <FormControl id='password' type="password" onChange={handleChangePass} value={password}></FormControl>
                    <Button id='submit-login' type="submit">Login</Button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default Login