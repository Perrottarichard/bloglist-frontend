import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Menu from './components/Menu'
import BlogList from './components/BlogList'
import Blog from './components/Blog'
import UserList from './components/UserList'
import blogService from './services/blogs'
import Login from './components/Login'
import Logout from './components/Logout'
import AddBlogForm from './components/AddBlogForm'
import SingleUser from './components/SingleUser'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import { initializeBlogs } from './reducers/blogReducer'
import { setUser } from './reducers/userReducer'
import { setAllUsers } from './reducers/allUsersReducer'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const AddBlogFormRef = React.createRef()

  const blogs = useSelector(state => state.blogs)
  const user = useSelector(state => state.user)
  const allUsers = useSelector(state => state.allUsers)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeBlogs())
  }, [dispatch])

  useEffect(() => {
    dispatch(setAllUsers())
  }, [dispatch])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch(setUser(user))
      setLoggedIn(true)
      blogService.setToken(user.token)
    }
  }, [dispatch])

  if (loggedIn === false) {
    return (
      <div>
        <Login
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
        <Notification />
      </div>
    )
  }
  return (
    <Router>
      <div>
        <Menu />
        <Notification />
        <h4>{user.username} logged in</h4>
        <Logout
          setLoggedIn={setLoggedIn} />
        <Togglable buttonLabel="add blog" ref={AddBlogFormRef}>
          <AddBlogForm
            blogs={blogs}
            AddBlogFormRef={AddBlogFormRef} />
        </Togglable>
        <Switch>
          <Route path='/blogs/:id'>
            <Blog
              blogs={blogs}
              user={user} />
          </Route>
          <Route path='/blogs'>
            <BlogList
              blogs={blogs}
              user={user} />
          </Route>
          <Route path='/users/:id'>
            <SingleUser
              allUsers={allUsers} />
          </Route>
          <Route path='/users'>
            <UserList
              allUsers={allUsers} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App