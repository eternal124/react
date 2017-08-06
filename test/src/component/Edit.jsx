import React from 'react'
import PropTypes from 'prop-types';

class Edit extends React.Component{
    constructor (props){
        super(props)
        this.state = this.props.user; // 状态初始值
        this.handleChange = this.handleChange.bind(this); // 函数手动绑定
    }
    
    handleChange (event){ // 输入新值
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name] : value})
    }

    handleClick(e){ // 点击确定
        e.preventDefault();
        this.props.onEdit(user);
    }

    render() {
        let thiz = this
        
        return (
            <div className="edit">{
                Object.keys(thiz.props.user).map((property) => {
                    if (property === 'id'){
                        return null;
                    }
                    return (
                        <label>
                            {property}: 
                            <input  type="text" 
                                    key={property}
                                    defaultValue={thiz.props.user[property]} 
                                    onChange={thiz.handleChange} 
                                    readOnly={{property} === 'name' ? "true" : "false"} />
                            <br /><br />
                        </label>
                    )
                })
            }
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={(e) => thiz.handleClick(e)}>确定</button>
            </div>
        )
    }   
}


Edit.propTypes = {
    onEdit: PropTypes.func.isRequired,
    user: PropTypes.objectOf({
        name: PropTypes.string.isRequired
    }).isRequired
}

export default Edit