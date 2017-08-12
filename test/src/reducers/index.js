import { combineReducers } from 'redux'

import chooseOne from '../component/chooseOne'

const initialState = {
    users: [],
    user: {},
    search: false,
    loaded: false
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'INIT_STATE':
            return {
                ...state,
                ...action.payload,
                loaded: true
            }
        case 'ADD_USER':
            return {
                ...state,
                users: [
                    ...state.users,
                    action.user]
            }
        case 'SEARCH_USER':
            let user = state.users.find(user => user.name === action.name);
            let search = true
            if (user === undefined || user.tag === true){
                user = {}
                search = false;
            }
            return {
                ...state,
                user: user,
                search: search
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
        case 'EDIT_USER':
            console.log('edit:')
            return Object.assign({}, state,{
                users: state.users.map((user, i) => {
                    if (action.user.name === user.name){
                        return {
                            ...user,
                            ...action.user
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