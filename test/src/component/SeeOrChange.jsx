import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import One from './One'
import { onSearch } from '../actions'

class SeeOrChange extends React.Component{
    handleClick (e) {
        e.preventDefault();
        // console.log(this.search.value)
        const path = `/see|change/${this.search.value}`;
        this.props.onClick(this.search.value);
        this.props.history.push(path);
    }

    render () {
        return (
            <div className="search">
                <input type="text" 
                        placeholder="输入查找|修改内容" 
                        ref={ node => this.search = node }/>
                <br/>
                <button icon="search" onClick={(e) => this.handleClick(e)}>查找|修改</button>
                {/* { 
                    this.props.search ?
                    <One history={this.props.history}/>
                    : <h1> 查找失败 </h1> }*/
                }
            </div>
        )
    }
}

const mapStateToProps = (state, action) => {
    return {
        user: state.user,
        serach: state.search
    }
}

const mapDispatchToProps = {
    onClick: (name) => (onSearch(name))
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SeeOrChange)