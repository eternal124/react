import React from 'react'

import All from '../component/All'
import One from '../component/One'
import Add from '../component/Add'
import Delete from '../component/Delete'
import Edit from '../component/Edit'
import SeeOrChange from '../component/SeeOrChange'

const Test = ({ state }) => (
    <div>
        <div>
            <h1>添加</h1>
            <h1>搜索</h1>
            <h1>删除</h1>
        </div>
        <div>
            <All users={state.users} />
        </div>
        <div>
            <Add /> 
            <Delete /> 
            <SeeOrChange /> 
        </div>
    </div>
)

export default Test