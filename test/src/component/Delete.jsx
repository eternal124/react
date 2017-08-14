import React from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import { onDelete } from '../actions'

class Delete extends React.Component {
    constructor (props) {
        super(props);
        this.state ={}
        props.users.map(user => {
            this.state[user.id] = false;
        })
    }
    handleChange(id, e) {
        const checked = !e.target.checked
        this.setState({ [id]: checked })
    }

    handleClick(e) {
        e.preventDefault();
        var state = {...this.state};
        var id = Object.keys(state).filter(key => state[key] === false)
        console.log(id)
        this.props.history.push('/delete/success')
        this.props.onClick(id);
    }
    
    render() {
        return (
            <div className="delete">{
                this.props.users.map(user => user['tag'] === true
                    ? null : (<label> 
                        {user.name}
                        <input key={user.id} 
                            type="checkbox"
                            onChange={(e) => this.handleChange(user.id, e)} /> 
                        <br/>
                    </label>
                ))
            }
                <hr/>
                是否删除所选用户？
                <button onClick={(e) => this.handleClick(e)}>删除</button>
                <button type="reset" >取消</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => dispatch(onDelete(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Delete)