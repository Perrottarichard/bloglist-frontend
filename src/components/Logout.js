import React from 'react'
import { useDispatch } from 'react-redux'
import { clearUser } from '../reducers/userReducer'

const Logout = (props) => {
    const { setLoggedIn } = props

    const dispatch = useDispatch()
    const logout = () => {
        window.localStorage.clear()
        setLoggedIn(false)
        dispatch(clearUser())

    }
    return (
        <div>
            <button onClick={logout}>logout</button>
        </div>
    )
}
export default Logout