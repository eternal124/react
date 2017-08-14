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
                users: action.payload,
                inited: true
            }
        case 'UPDATE_STATE':
            console.log('----------')
            console.log(action.payload)
            return {
                ...state,
                users: action.payload
            }
        case 'SEARCH_USER':
            return {
                ...state,
                user: action.payload
            }
        default:
            console.log('----------', action, '-----------')
            return state;
    }
}

export { reducer }