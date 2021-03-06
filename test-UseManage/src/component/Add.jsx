import PropTypes from 'prop-types';
import React from 'react'
import { connect } from 'react-redux'

import { onAdd } from '../actions'

class Add extends React.Component{
    handleClick () {
        let user = {}
        user.name = this.name.value;
        user.age = this.age.value;
        user.sex = this.sex.value
        user.tel = this.tel.value
        user.address = this.address.value
        this.props.history.push('/add/success')

        console.log('------------ADD----------------',JSON.stringify(user))

        this.props.onClick(user)
    }

    render () {
        return (
            <div className="add">
                姓名: <input type="text"  ref={n=>this.name=n}/><br /><br />
                年龄：<input type="text"  ref={n=>this.age=n}/><br /><br />
                性别：<input type="text" ref={n=>this.sex=n}/><br /><br />
                电话：<input type="text" ref={n=>this.tel=n}/><br /><br />
                地址：<input type="text" ref={n=>this.address=n}/><br /><br />
                <button onClick={() => this.handleClick()}>确定</button>
            </div>
        )
    }
}

let mapStateToProps = (state, name) => {
    return {
        users: state.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onClick: (user) => { dispatch(onAdd(user))}
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Add)

// export default Add