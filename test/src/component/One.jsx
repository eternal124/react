import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const One = ( { history, user, search } ) => {   // 给 One这个组件添加了history 和 match两个属性，而这两个属性是从Route的props中解构得到的
    return !search ? null : (
        <div className='one'>
            <ul>{
                Object.keys(user).map( (property) => 
                    property === 'tag' ? null : <li key={property}>{property}: {user[property]}</li>)
            }
            </ul>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={(e)=>{
                e.preventDefault();
                const path = `/edit/${user.name}`
                history.push(path) 
            }}> 编辑 </button>
        </div> 
    ) 
}

const mapStateToProps = (state, action) => {
    return {
        user: state.user,
        search: state.search
    }
}

export default connect(
    mapStateToProps
)(One)
