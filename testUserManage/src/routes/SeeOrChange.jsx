import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'dva'
import { Select, Input, Button } from 'antd'

import {One} from './One'
import { onSearch } from '../actions/index'

const Option = Select.Option

class SeeOrChange extends React.Component {
    state = {
        selectValue: 'name',
        inputValue: ''
    }
    
    handleSelectChange = (value) => {
        this.setState({
            selectValue: value
        })
    }
    handleInputChange = (e) => {
        this.setState({ 
            inputValue: e.target.value 
        });
    }
    handleClick = (e) => {
        e.preventDefault()
        const { selectValue, inputValue } = this.state
        this.props.onClick(selectValue, inputValue);
    }

    render() {
        let {inputValue} = this.state
        return (
            <div className="search">
                <Select defaultValue="name" style={{ width: 80 }} onChange={this.handleChange}>
                    <Option value="id">ID</Option>
                    <Option value="name">Name</Option>
                    <Option value="tel">Tel</Option>
                </Select>&nbsp;
                <Input placeholder='Enter the information what you search'
                    value={inputValue}
                    onChange={this.handleInputChange}
                    style={{width: 250}}
                />&nbsp;
                <Button icon="search" onClick={this.handleClick}>Search|Change</Button>
                <div style={{background: '#e0e0e0', width: 900, height: 550, margin: '50px auto', textAlign: 'center'}}>
                    { this.props.children || <h>查找内容将在此显示</h> }
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({userManage}) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (selectValue, inputValue) => dispatch(onSearch(selectValue, inputValue))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SeeOrChange)