import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'dva'
import { Table } from 'antd'

import {onSearch} from '../actions/index'
import '../index.css'

const All = ( {users, onClick}) => {
    const columns = [{
        title: 'Id',
        dataIndex: 'key',
        key: 'key'
      }, {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: 'Sex',
        dataIndex: 'sex',
        key: 'sex',
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'action'
      }];

    return (
        <Table columns={columns} dataSource={users} onRowClick={onClick}/>
    )
}

All.propTypes = {
    users: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
}

const mapStateToProps = ({useManage}) => {
    return {
        users: useManage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => dispatch(onSearch(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(All)