import React from 'react';
import { Router, Route } from 'dva/router';

import { Home } from './routes/Home'
import { All } from './routes/All'
import One from './routes/One'
import Add from './routes/Add'
import Delete from './routes/Delete'
import Edit from './routes/Edit'
import SeeOrChange from './routes/SeeOrChange'
import { Success } from './routes/Success'

function RouterConfig({ history }) {
    return (
        <Router history={history}>
            <Route name="home" breadcrumbName="UserPage" path='/' component={Home} >
                <Route name="all" breadcrumbName="Home" path='home' component={All} />
                <Route name='add' breadcrumbName="Add" path='add' component={Add} />
                <Route name="delete" breadcrumbName="Delete" path='delete' component={Delete} />
                <Route name="search" breadcrumbName="SeeChange" path='seechange' component={SeeOrChange}>
                    <Route name="one" breadcrumbName="User" path='user' component={One}/>
                </Route>
                <Route name="edit" breadcrumbName="Edit" path='edit/:id' component={Edit}  />
                <Route name="success" breadcrumbName=":choose/Success" path=':choose/success' component={Success} />
            </Route>
        </Router>
    );
}

export default RouterConfig;

