import React from 'react'
import { useDispatch } from 'react-redux'
import { clearUser } from '../reducers/userReducer'
import { Button } from 'react-bootstrap'

const Logout = (props) => {
    const { setLoggedIn } = props

    const dispatch = useDispatch()
    const logout = () => {
        window.localStorage.clear()
        setLoggedIn(false)
        dispatch(clearUser())

    }
    return (
        <div id='logout'>
            <Button onClick={logout} variant='outline-light'>logout</Button>
        </div>
    )
}
export default Logout