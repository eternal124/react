import React from 'react'
import PropTypes from 'prop-types';

class Delete extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
        props.users.map((key, value) => {
            this.state[key] = false;
        })
    }
    handleChange(v, checked) {
        this.setState({ [key]: !checked })
    }

    handleClick(e) {
        e.preventDefault();
        var state = this.state;
        var name = state.map((key) => {
            if (state[key] === true){
                return key;
            }
            return '';
        })
        this.props.onDelete(name);
    }
    
    render() {
        let {state} = this.props;
        return (
            <div>
                {
                    this.props.users.map(user => (
                        <label> <input key={user.id} 
                                       type="checkbox"
                                       value={user.name} 
                                       defaultValue={user.name}
                                       onChange={(e) => this.handleChange(value, e.target.checked)} /> 
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

export default Delete