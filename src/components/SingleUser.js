import React from 'react'
import { useParams } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const SingleUser = (props) => {
    const { allUsers } = props
    const id = useParams().id
    const user = allUsers.filter(u => u.id === id)
    if (user) {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map(u => u.blogs.map(b => <tr key={b.id}><td>{b.title}</td><td>{b.author}</td></tr>))}
                    </tbody>
                </Table>
            </div>
        )
    }
    else {
        return null
    }
}
export default SingleUser