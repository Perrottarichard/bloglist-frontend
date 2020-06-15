import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

const BlogList = (props) => {
    const { blogs } = props

    return (
        <div id='blog-list'>
            <Table striped>
                <tbody>
                    {blogs.sort((a, b) => b.likes - a.likes)
                        .map(blog =>
                            <tr key={blog.id}>
                                <td> <Link to={`/blogs/${blog.id}`} > <strong>{blog.title}</strong> by: {blog.author}</Link></td>
                            </tr>
                        )}
                </tbody>
            </Table>
        </div>
    )
}
export default BlogList