import React from 'react'
import ReactDOM from 'react-dom'
import dva from 'dva'

import Container from './route/index'

const app = dva()

app.model({
    namespace: 'community',
    state: []
})

app.router(() => <Container />)
app.start('#home')

