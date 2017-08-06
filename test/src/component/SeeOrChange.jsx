import React from 'react'
import PropTypes from 'prop-types';

class SeeOrChange extends React.Component{

    constructor (props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick (e) {
        e.preventDefault();
        this.props.onSearch(this.props.value);
    }

    render () {
        return (
            <div>
                按<select onChange={e => this.handleChange(e)} defaultValue={this.props.option} >
                    <option value="id">ID</option>
                    <option value="name">姓名</option>
                    <option value="tel">电话</option>
                </select>查找
                <input type="text" placeholder="输入查找|修改内容" defaultValue={this.props.value}/><br/>
                <button icon="search" onClick={() => this.props.handleClick(e)}>查找|修改</button>
            </div>
        )
    }
}

SeeOrChange.propTypes = {
    option: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired
}


export default SeeOrChange