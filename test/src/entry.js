import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import RouterTest from './containers/routers'
import { reducer } from './reducers/index'

import style from './css/usePage'

const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <RouterTest />
    </Provider>, document.getElementById('usepage')
)
