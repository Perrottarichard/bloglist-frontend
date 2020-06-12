import React from 'react'
import PropTypes from 'prop-types'
import { addBlog } from '../reducers/blogReducer'
import { useField } from '../hooks'
import { useDispatch } from 'react-redux'


const AddBlogForm = () => {
    //const { AddBlogFormRef } = props
    const title = useField('text')
    const author = useField('text')
    const url = useField('text')
    const dispatch = useDispatch()

    const addNew = async (event) => {
        event.preventDefault()
        //AddBlogFormRef.current.toggleVisibility()
        const added = {
            title: title.value,
            author: author.value,
            url: url.value
        }
        dispatch(addBlog(added))
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