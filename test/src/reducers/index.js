import { combineReducers } from 'redux'

import chooseOne from '../component/chooseOne'

const initialState = {
    inited: false,
    users: [],
    user: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'INIT_STATE':
            return {
                ...state,                
                ...action.payload,
                inited: true
            }
        case 'DELETE_USER':
            console.log('DELETE_USER','----------')
        case 'EDIT_USER':
            console.log('EDIT_USER','----------')
        case 'ADD_USER':
            console.log('ADD_USER','----------')
            console.log(action.user)
        case 'UPDATE_STATE':
            console.log('----------')
            console.log(action.payload)
            return {
                ...state,
                ...action.payload
            }
        case 'SEARCH_USER':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export { reducer }