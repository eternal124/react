import React from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import { onDelete } from '../actions'

class Delete extends React.Component {
    constructor (props) {
        super(props);
        this.state ={}
        props.users.map(user => {
            this.state[user.name] = true;
        })
        // console.log(this.state)
    }
    handleChange(key, e) {
        let checked = !(e.target.checked)
        // console.log(!checked);
        this.setState({ [key]: checked })
    }

    handleClick(e) {
        e.preventDefault();
        var state = {...this.state};
        // console.log(state);
        var name = Object.keys(state).filter(key => state[key] === false)
        // console.log(name);
        this.props.onClick(name);
    }
    
    render() {
        return (
            <div>{
                this.props.users.map(user => user['tag'] === true
                    ? null : (<label> 
                        {user.name}
                        <input key={user.id} 
                            type="checkbox"
                            checked={!this.state[user.name]}
                            onChange={(e) => this.handleChange(user.name, e)} /> 
                        <br/>
                    </label>
                ))
            }
                是否删除所选用户？
                <button onClick={(e) => this.handleClick(e)}>删除</button>
                <button type="reset" >取消</button>
            </div>
        )
    }
}


Delete.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onDelete: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (name) => dispatch(onDelete(name))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Delete)