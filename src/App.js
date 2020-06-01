import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Login from './components/Login'
import AddBlogForm from './components/AddBlogForm'
import Togglable from './components/Togglable'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const AddBlogFormRef = React.createRef()


  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      setLoggedIn(true)
      blogService.setToken(user.token)
    }
  }, [])

  const upLike = async blog => {
    try {
      let updatedBlog = {
        id: blog.id,
        user: user.id,
        title: blog.title,
        author: blog.author,
        url: blog.url,
        likes: blog.likes + 1
      }
      await blogService.update(blog, updatedBlog)
      setBlogs(blogs.map(blog => blog.title !== updatedBlog.title ? blog : updatedBlog))
    } catch (error) {
      console.log(error)
    }
  }
  const deleteBlog = async blog => {
    let sure = window.confirm(`Are you sure you want to delete ${blog.title}?`)
    if (sure) {
      try {
        let blogToDelete = blog
        console.log(blog)
        await blogService.remove(blogToDelete)
        setBlogs(blogs.filter(blog => blog.id !== blogToDelete.id))
      } catch (error) {
        console.log(error)
      }
    }
  }

  if (loggedIn === false) {
    return (
      <div>
        <Login
          user={user}
          setUser={setUser}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          successMessage={successMessage}
          setSuccessMessage={setSuccessMessage}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      </div>
    )
  }
  return (
    <div>
      <h2>blogs</h2>
      <h4>{user.username} logged in</h4>
      {(errorMessage !== '') ? <h3>{errorMessage}</h3> : null}
      {(successMessage !== '') ? <h3>{successMessage}</h3> : null}
      <Togglable buttonLabel="add blog" ref={AddBlogFormRef}>
        <AddBlogForm
          blogs={blogs}
          setBlogs={setBlogs}
          successMessage={successMessage}
          setSuccessMessage={setSuccessMessage}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          AddBlogFormRef={AddBlogFormRef} />
      </Togglable>

      {blogs.sort((a, b) => b.likes - a.likes)
        .map(blog =>
          <Blog
            key={blog.id}
            blog={blog}
            upLike={upLike}
            user={user}
            deleteBlog={deleteBlog}
          />
        )}
    </div>
  )
}

export default App