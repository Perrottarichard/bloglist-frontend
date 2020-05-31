import React from 'react'
import Togglable from './Togglable'

const Blog = (props) => {

  const { blog, upLike } = props
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
    width: 250
  }

  return (
    <div style={blogStyle}>
      <div>
        "<strong>{blog.title}"</strong> by: {blog.author}
      </div>
      <Togglable buttonLabel="show">
        url: {blog.url} <br></br>
        likes: {blog.likes} <button onClick={() => upLike(blog)}>like</button><br></br>
      </Togglable>
    </div>
  )
}
export default Blog
