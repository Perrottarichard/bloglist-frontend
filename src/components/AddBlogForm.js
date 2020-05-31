import React from 'react'
import blogService from '../services/blogs'

const AddBlogForm = (props) => {

    const { blogs, setBlogs, title, setTitle, author, setAuthor, url, setUrl, setSuccessMessage, setErrorMessage } = props

    const addBlog = async event => {
        event.preventDefault()
        try {
            const newBlog = {
                title: title,
                author: author,
                url: url
            }
            await blogService.create(newBlog).then(response => setBlogs(blogs.concat(response)))
            setSuccessMessage(`Congratulations! ${title} by ${author} has been added to your blog list.`)
            setTitle('')
            setAuthor('')
            setUrl('')
            setTimeout(() => {
                setSuccessMessage('')
            }, 3000);
        } catch (error) {
            setErrorMessage('Sorry, that did not work')
            setTimeout(() => {
                setErrorMessage('')
            }, 3000);
        }

    }
    return (
        < div >
            <form onSubmit={addBlog}>
                Title: <input onChange={({ target }) => setTitle(target.value)} value={title}>
                </input><br></br>
      Author: <input onChange={({ target }) => setAuthor(target.value)} value={author}>
                </input><br></br>
      url: <input onChange={({ target }) => setUrl(target.value)} value={url}>
                </input><br></br>
                <button type="submit">Create</button><br></br>
            </form>
        </div >
    )
}
export default AddBlogForm