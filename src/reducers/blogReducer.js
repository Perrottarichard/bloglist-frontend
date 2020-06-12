import blogService from '../services/blogs'

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_BLOG':
            return state.concat(action.data)
        case 'INIT_BLOGS':
            console.log(action.data)
            return action.data
        case 'VOTE':
            const id = action.data.id
            const blogToChange = state.find(b => b.id === id)
            const changedBlog = { ...blogToChange, likes: blogToChange.likes + 1 }
            return state.map(b => b.id === id ? changedBlog : b)
        default: return state
    }
}
export const upVote = (blog) => {
    return async dispatch => {
        const updatedObject = { ...blog, likes: blog.likes + 1 }
        await blogService.voteUp(updatedObject)
        dispatch({
            type: 'VOTE',
            data: updatedObject
        })
    }
}
export const addBlog = data => {
    return async dispatch => {
        const newBlog = await blogService.create(data)
        dispatch({
            type: 'NEW_BLOG',
            data: newBlog
        })
    }
}
export const initializeBlogs = () => {
    return async dispatch => {
        const blogs = await blogService.getAll()
        dispatch({
            type: 'INIT_BLOGS',
            data: blogs
        })
    }
}
export default reducer