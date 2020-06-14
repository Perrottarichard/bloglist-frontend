import React from 'react'
import { Link } from 'react-router-dom'

const UserList = (props) => {
    const { allUsers } = props
    return (
        <div>
            <h3>Users</h3>
            {allUsers.map(u => <div key={u.id}><Link to={`/users/${u.id}`}>{u.username}</Link> <br /> <li> blogs: {u.blogs.length}</li></div>)}
        </div>


    )
}
export default UserList