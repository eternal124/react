import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import RouterTest from './containers/routers'
import { reducer } from './reducers/index'

import style from './css/usePage'

const store = createStore(reducer)

console.log(store.getState())

store.subscribe(() => {
    console.log('---------State Change-------------')
    console.log(store.getState())
});

ReactDOM.render(
    <Provider store={store}>
        <RouterTest dispatch={(action=>store.dispatch(action))}/>
    </Provider>, document.getElementById('usepage')
)
