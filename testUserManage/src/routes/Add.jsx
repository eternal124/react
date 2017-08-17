import React from 'react'
import { connect } from 'dva'
import { Form } from 'antd';
import moment from 'moment';

import { onAdd } from '../actions/index'
import OwnForm from '../components/OwnForm'

const Add = Form.create()(OwnForm);

let mapStateToProp = ({userManage}) => {
  return {
    user: {
      name: '',
      birth: moment(),
      sex: '',
      tel: '',
      prefix: '86',
      address: '',
    },
    type: 'add'
  }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onClick: (user) => { dispatch(onAdd(user))}
    }
}

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Add)
