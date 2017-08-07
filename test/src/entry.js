import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import RouterTest from './containers/routers'
import reducer from './reducers/reducer'
import './css/usePage'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <RouterTest />
    </Provider>, document.getElementById('usepage')
)
