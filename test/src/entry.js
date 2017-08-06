import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import RouterTest from './routers/router'
import './css/usePage'

ReactDOM.render(
    <Provider store={store}>
        <RouterTest />
    </Provider>, 
    document.getElementById('usepage'))
