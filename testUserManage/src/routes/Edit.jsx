import React from 'react'
import { connect } from 'dva'
import { Form } from 'antd'

import { onEdit } from '../actions/index'
import OwnForm from '../components/OwnForm'

const Edit = Form.create()(OwnForm)

const mapStateToProps = ({userManage}) => {
    return {
        user: userManage.user[userManage.editId],
        type: 'edit'
    }
}

const mapDipatchToProps = (dispatch) => {
    return {
        onClick: (user) => dispatch(onEdit(user))
    }
}

export default connect(
    mapStateToProps,
    mapDipatchToProps
)(Edit)

