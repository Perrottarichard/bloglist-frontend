import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const UserList = (props) => {
    const { allUsers } = props
    return (
        <div>
            <h3>Users</h3>
            <Table>
                <tbody>
                    {allUsers.map(u => <tr key={u.id}><td><Link to={`/users/${u.id}`}>{u.username}</Link></td><td>blogs: {u.blogs.length}</td></tr>)}
                </tbody>
            </Table>
        </div>


    )
}
export default UserList