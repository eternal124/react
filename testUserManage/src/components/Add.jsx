import PropTypes from 'prop-types';
import React from 'react'
import { connect } from 'dva'
import { Form, Input, Icon, Select, Radio, Button } from 'antd';

import { onAdd } from '../actions/index'

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class AddForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.onClick(values)
        this.props.history.push('/add/success')
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 60 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label="Name" hasFeedback >
          {getFieldDecorator('name', {
            rules: [{
                required: true, message: 'The input is not valid name!'}],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem label="Age" hasFeedback >
          {getFieldDecorator('age', {
            rules: [{
              required: true, message: 'Please input your age!'}],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem label="Sex" >
          {getFieldDecorator('sex')(
            <RadioGroup>
              <Radio value="male">male</Radio>
              <Radio value="female">female</Radio>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem label="Phone Number" >
          {getFieldDecorator('tel', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(
            <Input addonBefore={prefixSelector} />
          )}
        </FormItem> 
        <FormItem label="Address" hasFeedback >
          {getFieldDecorator('address', {
            rules: [{
              required: true, message: 'Please confirm your address!'}],
          })(
            <Input />
          )}
        </FormItem>       
        <FormItem >
          <Button type="primary" htmlType="submit">Ensure</Button>
        </FormItem>
      </Form>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onClick: (user) => { dispatch(onAdd(user))}
    }
}

const Add = Form.create()(AddForm);
export default connect(
    () => ({}),
    mapDispatchToProps
)(Add)

// export default Add
