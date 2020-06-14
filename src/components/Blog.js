import React from 'react'
import { voteMessage, deleteMessage, reset } from '../reducers/notificationReducer'
import { upVote, deleteBlog } from '../reducers/blogReducer'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

const Blog = (props) => {
  const dispatch = useDispatch()
  const { blogs, user } = props

  const id = useParams().id
  const baffled = blogs.filter(b => b.id === id)
  const blog = baffled[0]

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
  if (blog) {
    return (
      <div className="blogDiv" >
        <h3>Title: {blog.title}</h3>
        <h3>Author: {blog.author}</h3>
      url: {blog.url} <br></br>
        likes: {blog.likes} <button id='like' className="like" onClick={() => upLike(blog)}>like</button><br></br>
        owner: {blog.user.username} <br></br>
        {user.name === blog.user.name ? <button onClick={() => removeBlog(blog)}>delete</button> : null}
      </div>
    )
  }
  else {
    return null
  }
}
export default Blog
