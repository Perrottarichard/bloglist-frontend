const nada = ''
const notificationReducer = (state = nada, action) => {
    switch (action.type) {
        case 'VOTE_MESSAGE':
            return action.message
        case 'CREATE_MESSAGE':
            return action.message
        case 'DELETE_MESSAGE':
            return action.message
        case 'GOOD_LOGIN':
            return action.message
        case 'BAD_LOGIN':
            return action.message
        case 'RESET':
            return nada
        default:
            return state
    }
}
export const voteMessage = () => {
    return {
        type: 'VOTE_MESSAGE',
        message: 'You voted!'
    }
}
export const createMessage = () => {
    return {
        type: 'CREATE_MESSAGE',
        message: `Congratulations! You added a new blog to your list.`
    }
}
export const reset = () => {
    return {
        type: 'RESET',
        message: nada
    }
}
export const deleteMessage = () => {
    return {
        type: 'DELETE_MESSAGE',
        message: `You deleted a blog`
    }
}
export const goodLogin = () => {
    return {
        type: 'GOOD_LOGIN',
        message: `Welcome back!`
    }
}
export const badLogin = () => {
    return {
        type: 'BAD_LOGIN',
        message: `Sorry. Please try again`
    }
}

export default notificationReducer