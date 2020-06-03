import React, { useState } from 'react'
import blogService from '../services/blogs'
import PropTypes from 'prop-types'

const AddBlogForm = (props) => {

    const { blogs, setBlogs, setSuccessMessage, setErrorMessage, AddBlogFormRef } = props
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')


    const addBlog = async event => {
        event.preventDefault()
        AddBlogFormRef.current.toggleVisibility()
        try {
            const newBlog = {
                title: title,
                author: author,
                url: url
            }
            await blogService.create(newBlog).then(response => setBlogs(blogs.concat(response))) //using 'then' because I need the id from the response generated from mongoose to provide the unique key when mapping all blogs
            setSuccessMessage(`Congratulations! ${title} by ${author} has been added to your blog list.`)
            setTitle('')
            setAuthor('')
            setUrl('')
            setTimeout(() => {
                setSuccessMessage('')
            }, 3000)
        } catch (error) {
            setErrorMessage('Sorry, that did not work')
            setTimeout(() => {
                setErrorMessage('')
            }, 3000)
        }

    }
    return (
        < div >
            <form id='form' onSubmit={addBlog}>
                Title: <input id="title" onChange={({ target }) => setTitle(target.value)} value={title}>
                </input><br></br>
      Author: <input id='author' onChange={({ target }) => setAuthor(target.value)} value={author}>
                </input><br></br>
      url: <input id="url" onChange={({ target }) => setUrl(target.value)} value={url}>
                </input><br></br>
                <button type="submit">Create</button><br></br>
            </form>
        </div >
    )
}
AddBlogForm.propTypes = {
    blogs: PropTypes.array.isRequired,
}
export default AddBlogForm