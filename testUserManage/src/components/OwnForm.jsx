import { Form, Input, Icon, Select, Radio, Button, DatePicker } from 'antd';
import moment from 'moment';

import { onAdd } from '../actions/index'

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class OwnForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const { form, onClick, actionCreator, type } = this.props
        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                var id, user
                const today = new Date()
                const date = values['birth']._d
                const age = today.getFullYear() - date.getFullYear()
                const birth = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
                console.log(birth)
                if (type === 'add') {
                    id = today.getFullYear() + '' + today.getMonth() + '' + today.getDate()
                    user = { ...values, birth: birth, age: age, id: id }
                } else {
                    user = { ...values, birth: birth, age: age }
                }
                console.log(type, 'OwnForm: ', user);
                onClick(user)
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form
        const { name, birth, sex, tel, prefix, address } = this.props.user
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 6 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        }
        const buttonLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 6,
                }
            }
        }
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: prefix,
        })(<Select style={{ width: 60 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
        </Select>);

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label="Name" hasFeedback >
                    {getFieldDecorator('name', {
                        initialValue: name,
                        rules: [{
                            required: true, message: 'The input is not valid name!'
                        }],
                    })( <Input /> )}
                </FormItem>
                <FormItem {...formItemLayout} label="Age" hasFeedback >
                    {getFieldDecorator('birth', {
                        initialValue: moment(birth, 'YYYY/MM/DD'),
                        rules: [{
                            required: true, message: 'Please input your age!'
                        }],
                    })( <DatePicker /> )}
                </FormItem>
                <FormItem {...formItemLayout} label="Sex" >
                    {getFieldDecorator('sex', {
                        initialValue: sex
                    })(<RadioGroup>
                        <Radio value="male">male</Radio>
                        <Radio value="female">female</Radio>
                    </RadioGroup>)}
                </FormItem>
                <FormItem {...formItemLayout} label="Phone Number" >
                    {getFieldDecorator('tel', {
                        initialValue: tel,
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })( <Input addonBefore={prefixSelector} /> )}
                </FormItem>
                <FormItem {...formItemLayout} label="Address" hasFeedback >
                    {getFieldDecorator('address', {
                        initialValue: address,
                        rules: [{
                            required: true, message: 'Please confirm your address!'
                        }],
                    })( <Input /> )}
                </FormItem>
                <FormItem {...buttonLayout} >
                    <Button type="primary" htmlType="submit">Ensure</Button>
                </FormItem>
            </Form>
        );
    }
}

export default OwnForm