import React from 'react'
import Togglable from './Togglable'
import { voteMessage, deleteMessage, reset } from '../reducers/notificationReducer'
import { upVote, deleteBlog } from '../reducers/blogReducer'
import { useDispatch } from 'react-redux'

const Blog = (props) => {
  const dispatch = useDispatch()
  const { blog, user } = props
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
    width: 250
  }
  const upLike = blog => {
    dispatch(upVote(blog))
    dispatch(voteMessage())
    setTimeout(() => {
      dispatch(reset())
    }, 3000);
  }
  const removeBlog = blog => {
    dispatch(deleteBlog(blog))
    dispatch(deleteMessage())
    setTimeout(() => {
      dispatch(reset())
    }, 3000);

  }

  return (
    <div style={blogStyle} >
      <div className="blogShort">
        <strong>{blog.title}</strong> by: {blog.author}
      </div>
      <Togglable buttonLabel="show">
        <div className="toggleDiv" >
          url: {blog.url} <br></br>
        likes: {blog.likes} <button id='like' className="like" onClick={() => upLike(blog)}>like</button><br></br>
        owner: {blog.user.username} <br></br>
          {user.name === blog.user.name ? <button onClick={() => removeBlog(blog)}>delete</button> : null}
        </div>
      </Togglable>
    </div>
  )
}
export default Blog
