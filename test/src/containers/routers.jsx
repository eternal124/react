import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'

import All from '../component/All'
import One from '../component/One'
import Add from '../component/Add'
import Delete from '../component/Delete'
import Edit from '../component/Edit'
import SeeOrChange from '../component/SeeOrChange'

const RouterTest = () => (
    <Router>
        <div className="direct">
            <div className="left">
                <h1><Link to='/'>首页</Link></h1>
                <ul>
                    <li><Link to='/see|change'>查找|修改</Link></li>
                    <li><Link to='/add'>添加用户</Link></li>
                    <li><Link to='/delete'>删除用户</Link></li>
                </ul>
            </div>
            <div className="middle">
                <Route exact path='/' component={All} />
            </div>
            <div className="right">
                <Route path='/add' component={Add} />
                <Route path='/delete' component={Delete} />
                <Route path='/see/|change' render={({store}) => (
                    <SeeOrChange state={store.getState().search} />
                )} />
                <Route path='/:choose/success' render={(match) => ( // 删除 或 添加成功 
                    <h1> {`${match.choose}成功`} </h1>
                )} />
            </div>
        </div>
    </Router>
)

export default RouterTest