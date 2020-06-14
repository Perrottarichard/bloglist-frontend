import React from 'react'
import { useParams } from 'react-router-dom'

const SingleUser = (props) => {
    console.log(props)
    const { allUsers } = props
    const id = useParams().id
    const user = allUsers.filter(u => u.id === id)
    console.log(user)
    if (user) {
        return (
            <div>
                {user.map(u => u.blogs.map(b => <li key={b.id}>Title: {b.title} By:{b.author}</li>))}
            </div>
        )
    }
    else {
        return null
    }
}
export default SingleUser