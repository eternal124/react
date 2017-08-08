import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { onEdit } from '../actions/index'

class Edit extends React.Component{

    handleClick(e){ // 点击确定
        e.preventDefault();
        var user = {
            name: this.props.user.name,
            age: this.age.value,
            sex: this.sex.value,
            tel: this.tel.value,
            address: this.address.value,
            tag: false
        }
        // console.log(user)
        this.props.history.push('/edit/success')
        this.props.onClick(user);
    }

    render() {
        let thiz = this
        
        return !this.props.search ? null : (
            <div className="edit">{
                Object.keys(thiz.props.user).map((property) => {
                    if (property === 'tag'){
                        return null;
                    }
                    return (<label>
                        <span>{property}：</span>
                        { property === 'name'?
                            thiz.props.user[property] :
                            <input  type="text" 
                                    key={property}
                                    defaultValue={thiz.props.user[property]}
                                    ref={node => this[property] = node} />
                         }
                        <br/>
                    </label>)
                    
                })
            }
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={(e) => thiz.handleClick(e)}>确定</button>
            </div>
        )
    }   
}

const mapStateToProps = (state, action) => {
    return {
        user: state.user,
        search: state.search
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

