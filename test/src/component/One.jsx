import React from 'react'



const One = ( { history, user } ) => {   // 给 One这个组件添加了history 和 match两个属性，而这两个属性是从Route的props中解构得到的

    return (
        <div className='one'>
            <ul>{
                Object.keys(user).map( (property) => <li key={property}>{property}: {user[property]}</li> )
            }
            </ul>
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={(e)=>{
                e.preventDefault();
                const path = `/edit/${user.id}`
                history.push(path)
            }}> 编辑 </button>
        </div>
    )
}


export default One