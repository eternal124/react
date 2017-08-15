import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'

import style from './index.css'

const Router = () => (
    <Router>
        <div>
            <div className={style.head}>
                <img /> 社团图标
                <div> 搜索 。。。登陆 注册等 </div>
            </div>
            <div className={style.navigation}>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/see|change'>社团快讯</Link></li>
                    <li><Link to='/add'>社团风采</Link></li>
                    <li><Link to='/delete'>社团检索</Link></li>
                    <li><Link to='/delete'>资料下载</Link></li>
                    <li><Link to='/delete'>规章制度</Link></li>
                    <li><Link to='/delete'>关于我们</Link></li>
                </ul>
            </div>
            <div className={style.body}>
                <Route  path='/' component={Home} />
                {/* <Route path='/add' component={Add} />
                <Route path='/delete' component={Delete} />
                <Route path='/see|change' component={SeeOrChange}/>
                <Route path='/edit/:name' component={Edit}/>
                <Route path='/see|change/:name' component={One}/> */}
            </div>
        </div>
    </Router>
)

export default RouterTest
