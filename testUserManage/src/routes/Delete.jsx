import React from 'react'
import PropTypes from 'prop-types';

import { connect } from 'dva'

import { Checkbox, Button } from 'antd';
const CheckboxGroup = Checkbox.Group;

import { onDelete } from '../actions/index'

class Delete extends React.Component {
    usersname = this.props.users.map(user => user.id+'-'+user.name )
    state = {
        checkedList: [],
        indeterminate: true,
        checkAll: false,
    };
    onChange = (checkedList) => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < this.usersname.length),
            checkAll: checkedList.length === this.usersname.length,
        });
    }
    onCheckAllChange = (e) => {
        this.setState({
            checkedList: e.target.checked ? this.usersname : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    }
    handleClick = (e) => {
        e.preventDefault();
        const id = this.state.checkedList.map(checked => checked.split('-')[0])
        console.log(id)
        this.props.onClick(id);
    }

    render() {
        return (
            <div>
                <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                    <Checkbox indeterminate={this.state.indeterminate}
                        onChange={this.onCheckAllChange}
                        checked={this.state.checkAll}
                    >
                        Check all
                    </Checkbox>
                </div>
                <br />
                <CheckboxGroup options={this.usersname} value={this.state.checkedList} onChange={this.onChange} />
                <br />
                是否删除所选用户？<Button onClick={this.handleClick}>Ensure</Button>
            </div>
        )
    }
}

const mapStateToProps = ({ userManage }) => {
    return {
        users: userManage.users
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
