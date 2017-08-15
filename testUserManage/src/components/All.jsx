import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'dva'

import {onSearch} from '../actions/index'

const All = ( {users, onClick}) => (
    <table className="all">
        <caption>UsePage</caption>
        <tbody>
            { users.map((user) => (
                user['tag'] === true
                ? null
                : <tr onClick={onClick}>{
                     Object.keys(user).map((property) => 
                         property==='tag' || property==='id' ? null :<td key={property}> {user[property]} </td>
                     )
                 }
                </tr>
            ))}
        </tbody>
    </table>
)

let mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => dispatch(onSearch(name))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(All)