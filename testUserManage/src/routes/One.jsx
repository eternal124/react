import React from 'react'
import { connect } from 'dva'
import { Link } from 'dva/router'
import { Carousel, Button } from 'antd'

class One extends React.Component {
    handleClick(e, id) {
        e.preventDefault()
        console.log(id)
        return this.props.onClick(id)
    }

    render() {

        const carousel = {
            height: '500px',
            lineHeight: '500px',
            background: '#e0e0e0',
            overflow: 'hidden',
            textAlign: 'center'
        }
        const div = {
            margin: '20px auto',
            lineHeight: '50px',
            width: '500px',
            height: '500px',
            overflow: 'hidden',
            textAlign: 'center'
        }

        return (
            <Carousel autoplay style={carousel}>
                {this.props.user.map((one, index) => (
                    <div key={index} style={div}>
                        <table style={{margin: 'auto'}}><tbody>{
                            Object.keys(one).map((prop) => (
                                <tr key={prop} style={{ fontSize: 28 }}>
                                    <td style={{ textAlign: 'right', width: '100px' }}>{prop}: </td>
                                    <td style={{ textAlign: 'left', width: '400px' }}>&nbsp;&nbsp;&nbsp;&nbsp;{one[prop]}</td>
                                </tr>
                            ))
                        }
                        </tbody></table>
                        <Button onClick={(e) => this.handleClick(e, index)}> 编辑 </Button>
                    </div>
                ))}
            </Carousel>
        )
    }

}



const mapStateToProps = ({ userManage }) => {
    console.log(userManage.user)
    return {
        user: userManage.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (id) => {
            console.log(id)
            dispatch({
                type: 'userManage/toEdit',
                id
            })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(One)
