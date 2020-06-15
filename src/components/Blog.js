import React from 'react'
import { voteMessage, deleteMessage, reset } from '../reducers/notificationReducer'
import { upVote, deleteBlog } from '../reducers/blogReducer'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Jumbotron, Table, Button } from 'react-bootstrap'

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
      <Jumbotron fluid>
        <Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>url</th>
              <th>likes</th>
              <th>owner</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>{blog.title}</td>
              <td>{blog.author}</td>
              <td>{blog.url}</td>
              <td>{blog.likes}</td>
              <td>{blog.user.username}</td></tr>
          </tbody>
        </Table>
        <Button id='like' variant='outline-primary' onClick={() => upLike(blog)}>like</Button>
        {user.name === blog.user.name ? <Button id='delete' variant='outline-danger' onClick={() => removeBlog(blog)}>delete</Button> : null}
      </Jumbotron>
    )
  }
  else {
    return null
  }
}
export default Blog
