import PropTypes from 'prop-types';
import React from 'react'

class Add extends React.Component{

    constructor(props) {
        super(props);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.onAdd(this.props.user);
    }

    render() {
        return (
            <div>
                姓名: <input type="text" defaultValue={this.props.user.name} /><br /><br />
                年龄：<input type="text" defaultValue={this.props.user.age} /><br /><br />
                性别：<input type="text" defaultValue={this.props.user.sex} /><br /><br />
                电话：<input type="text" defaultValue={this.props.user.tel} /><br /><br />
                地址：<input type="text" defaultValue={this.props.user.address} /><br /><br />
                <button onClick={e => this.handleClick(e)}>确定</button>
            </div>
        )
    }
}

Add.propTypes = {
    onAdd: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
}


export default Add