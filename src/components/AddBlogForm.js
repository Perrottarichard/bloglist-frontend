import React from 'react'
import PropTypes from 'prop-types'
import { addBlog } from '../reducers/blogReducer'
import { createMessage, reset } from '../reducers/notificationReducer'
import { useField } from '../hooks'
import { useDispatch } from 'react-redux'
import { Form, FormLabel, FormControl, FormGroup, Button } from 'react-bootstrap'


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
        < div className='container'>
            <Form id='form' onSubmit={addNew}>
                <FormGroup>
                    <FormLabel>Title:</FormLabel><FormControl id="title" onChange={title.onChange} value={title.value}></FormControl>
                    <FormLabel>Author:</FormLabel><FormControl id='author' onChange={author.onChange} value={author.value}></FormControl>
                    <FormLabel>url:</FormLabel><FormControl id="url" onChange={url.onChange} value={url.value}></FormControl>
                    <Button type="submit">Create</Button><br></br>
                </FormGroup>
            </Form>
        </div >
    )
}
AddBlogForm.propTypes = {
    blogs: PropTypes.array.isRequired,
}
export default AddBlogForm