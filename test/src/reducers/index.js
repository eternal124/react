import { combineReducers } from 'redux'

import chooseOne from '../component/chooseOne'

const initialState = {
    users: chooseOne.users,
    user: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_USER':
            return {
                users: [
                    ...state.users,
                    action.user]
            }
        case 'SEARCH_USER':
            let user = state.users.find(user => user.name === action.name);
            // console.log(action.name);
            return {
                ...state,
                user: user
            }
        case 'DELETE_USER':
            return Object.assign({}, state, {
                users: state.users.map(user => {
                    if (action.name.find(name => name === user.name) !== undefined){
                        return {
                            ...user,
                            tag: true // 表示被删除
                        }
                    }
                    return user
                })
            })
        default:
            return state;
    }
}


export { reducer }