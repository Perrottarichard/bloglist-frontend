import React from 'react'
import { Link } from 'react-router-dom'

const BlogList = (props) => {
    const { blogs } = props
    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5,
        width: 250
    }
    return (
        <div id='blog-list'>
            {blogs.sort((a, b) => b.likes - a.likes)
                .map(blog =>
                    <div key={blog.id} style={blogStyle}>
                        <Link to={`/blogs/${blog.id}`} > <strong>{blog.title}</strong> by: {blog.author}</Link>
                    </div>
                )}
        </div>
    )
}
export default BlogList