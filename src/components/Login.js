import React, { useState } from 'react'
import loginService from '../services/login'
import blogService from '../services/blogs'

const Login = (props) => {
    const { setUser, successMessage, setLoggedIn, setSuccessMessage, errorMessage, setErrorMessage } = props
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
            setUser(user)
            setSuccessMessage(`Welcome back ${user.username}`)
            setTimeout(() => {
                setSuccessMessage('')
                setLoggedIn(true)
            }, 1000)
            setUsername('')
            setPassword('')
            console.log(user)
        }
        catch (error) {
            setErrorMessage('Sorry, please check that you typed your username and password correctly')
            setTimeout(() => {
                setErrorMessage('')
            }, 3000)
        }
    }
    return (
        <div>
            <h2>Please enter your username and password to log in</h2>
            <form onSubmit={submitLogin}>
                Username: <input onChange={handleChangeUser} value={username}></input><br></br>
                Password: <input type="password" onChange={handleChangePass} value={password}></input><br></br>
                <button type="submit">Login</button>
            </form>
            {(errorMessage !== '') ? <h3>{errorMessage}</h3> : null}
            {(successMessage !== '') ? <h3>{successMessage}</h3> : null}
        </div>
    )
}

export default Login