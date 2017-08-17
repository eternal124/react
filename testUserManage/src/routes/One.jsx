import React from 'react'
import { connect } from 'dva'
import { Link } from 'dva/router'
import { Carousel, Button } from 'antd'

const One = ({ user, onClick }) => (
    <Carousel style={{
        textAlign: 'center', 
        height: '500px', 
        lineHeight: '500px', 
        background: '#364d79', 
        overflow: 'hidden'}}>
    {
        user.map((one, index) => (
            <div key={index} style={{textAlign: 'center'}}>
                { Object.keys(one).map((property) =>
                    <h2 key={property}> {property}: {one[property]} </h2>)}
                <Button onClick={(id) => onClick(id)}> 编辑 </Button>
            </div>
        ))}
    </Carousel>
)


const mapStateToProps = ({ userManage }) => {
    return {
        user: userManage.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => dispatch({
            type: 'userManage/toEdit',
            id
        })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(One)
