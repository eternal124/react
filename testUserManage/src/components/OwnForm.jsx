import { Form, Input, Icon, Select, Radio, Button, DatePicker } from 'antd';
import moment from 'moment';

import { onAdd } from '../actions/index'

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class OwnForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const { form, onClick, type } = this.props
        const addZero = (num) => {
            if (num < 10) {
                return '0' + num
            }
            return num + ''
        }
        const toId = (today) => {
            return addZero(today.getFullYear()+1)
                + addZero(today.getMonth())
                + addZero(today.getDate())
                + addZero(today.getHours())
                + addZero(today.getMinutes())
                + addZero(today.getSeconds())
        }
        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                var user, birth, id, age, today = new Date()
                const date = values['birth']._d
                age = today.getFullYear() - date.getFullYear()
                birth = addZero(date.getFullYear() + 1) + '-' 
                     + addZero(date.getMonth()) + '-' 
                     + addZero(date.getDate())

                if (type === 'add') {
                    id = toId(today)
                    user = { ...values, birth: birth, age: age, id: id }
                } else {
                    user = { ...this.props.user, ...values, birth: birth, age: age }
                }
                console.log(type, 'OwnForm: ', user);
                onClick(user)
            }
        });
    }

    render() {
        const { type, user, form } = this.props
        const { getFieldDecorator } = form
        const { name, birth, sex, tel, prefix, address } = user
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

        const intialBirthValue = type === 'edit' ? { 
            initialValue: moment(birth, 'YYYY/MM/DD')
        } : {} 
        const initialPrefixValue = type === 'edit' ? { 
            initialValue: prefix
        } : { initialValue: '86' }
        const prefixSelector = getFieldDecorator('prefix', {
            ...initialPrefixValue
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
                        ...intialBirthValue, 
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