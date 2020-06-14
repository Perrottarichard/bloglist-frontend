import React from 'react'
import PropTypes from 'prop-types'
import { addBlog } from '../reducers/blogReducer'
import { createMessage, reset } from '../reducers/notificationReducer'
import { useField } from '../hooks'
import { useDispatch } from 'react-redux'


const AddBlogForm = (props) => {
    const { AddBlogFormRef } = props
    const title = useField('text')
    const author = useField('text')
    const url = useField('text')
    const dispatch = useDispatch()

    const addNew = async (event) => {
        event.preventDefault()
        AddBlogFormRef.current.toggleVisibility()
        const added = {
            title: title.value,
            author: author.value,
            url: url.value
        }
        dispatch(addBlog(added))
        dispatch(createMessage())
        setTimeout(() => {
            dispatch(reset())
        }, 3000);
    }
    return (
        < div >
            <form id='form' onSubmit={addNew}>
                Title: <input id="title" {...title}>
                </input><br></br>
      Author: <input id='author' {...author}>
                </input><br></br>
      url: <input id="url" {...url}>
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