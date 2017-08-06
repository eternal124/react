import React from 'react'
import PropTypes from 'prop-types';

const Row = ({ user }) => (
    <tr>{
        Object.keys(user).map((property) => <td key={property}> {user[property]} </td>)
    }
    </tr>
)


/*
* 显示所有用户 用于 middle div
*/
const All = ({ users }) => (
    <table className="all">
        <caption>UsePage</caption>
        <tbody>
            {users.map((user) => (
                <Row key={user.id} user={user} />
            ))}
        </tbody>
    </table>
)

All.propTypes = {
    users: PropTypes.arrayOf( // users数组中的user对象的id属性不可少
        PropTypes.shape({
            id: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}

export default All