import userService from '../services/users'

const allUsersReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_USERS':
            return action.data
        default:
            return state
    }
}
export const setAllUsers = () => {
    return async dispatch => {
        const users = await userService.getAllUsers()
        dispatch({
            type: 'SET_ALL_USERS',
            data: users
        })
    }
}
export default allUsersReducer