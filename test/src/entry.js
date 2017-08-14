import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import RouterTest from './containers/routers'
import { reducer } from './reducers/index'
import { rootSaga } from './sagas/index'

import style from './css/usePage'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

console.log(store.getState());

store.subscribe(() => {
    console.log('-------------STATE CHANGE----------------')
    console.log(store.getState())
});

ReactDOM.render(
    <Provider store={store}>
        <RouterTest />
    </Provider>, document.getElementById('usepage')
)
