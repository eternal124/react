import { combineReducers } from 'redux'

import chooseOne from '../component/chooseOne'

const initialState = {
<<<<<<< HEAD
    inited: false,
    users: [],
    user: {}
=======
    users: [],
    user: {},
    search: false,
    loaded: false
>>>>>>> 48d69ead35fce70d2e45fba805c0b313d6c8dbaf
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'INIT_STATE':
            return {
<<<<<<< HEAD
                ...state,                
                ...action.payload,
                inited: true
            }
        case 'DELETE_USER':
            console.log('DELETE_USER','----------')
        case 'EDIT_USER':
            console.log('EDIT_USER','----------')
=======
                ...state,
                ...action.payload,
                loaded: true
            }
>>>>>>> 48d69ead35fce70d2e45fba805c0b313d6c8dbaf
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