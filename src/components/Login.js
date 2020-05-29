import React from 'react'
import loginService from '../services/login'

const Login = (props) => {
    const { setUser, username, setUsername, password, setPassword } = props

    const handleChangeUser = (event) => {
        setUsername(event.target.value)
    }
    const handleChangePass = (event) => {
        setPassword(event.target.value)
    }
    const submitLogin = (e) => {
        e.preventDefault()
        let thisUser = {
            username: username,
            password: password
        }
        loginService.login(thisUser).then(user => setUser(user))
    }


    return (
        <div>
            <form onSubmit={submitLogin}>
                <input placeholder="username" onChange={handleChangeUser} value={username}></input>
                <input placeholder="password"
                    type="password" onChange={handleChangePass} value={password}></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login