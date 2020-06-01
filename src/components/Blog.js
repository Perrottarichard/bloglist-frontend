import React from 'react'
import Togglable from './Togglable'

const Blog = (props) => {

  const { blog, upLike, user, deleteBlog } = props
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
    width: 250
  }

  return (
    <div style={blogStyle} >
      <div className="blogShort">
        <strong>{blog.title}</strong> by: {blog.author}
      </div>
      <Togglable buttonLabel="show">
        <div className="toggleDiv" >
          url: {blog.url} <br></br>
        likes: {blog.likes} <button className="like" onClick={() => upLike(blog)}>like</button><br></br>
        owner: {blog.user.name} <br></br>
          {user.name === blog.user.name ? <button onClick={() => deleteBlog(blog)}>delete</button> : null}
        </div>
      </Togglable>
    </div>
  )
}
export default Blog
