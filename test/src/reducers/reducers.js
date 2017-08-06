import { createStore, applyMiddleware } from 'redux'
import thunk from 'thunk'
import { connect } from 'react-redux'

const store = createStore(reducer, applyMiddleware(thunk)); // 传入中间件thunk，加强了dispatch的功能 使之可以接受函数为参数
const state = store.getState();
const action = {
    type: 'string',
    payload: '携带的信息'
};
store.dispatch(action); // 发出动作信息
// const reducer = (state, action) => { // 解析动作信息  更改视图， 返回新的状态
//     return newState;
// };

store.subscribe(); // 添加事件监听

// redux的工作过程：
// 1、用户发出action
// 2、store自动调用reducer,当前的state和action作为参数传入，返回新的state
// 3、 state发生变化，监听器起作用 重新渲染View
// 输入逻辑 将state转换成props
// 输出逻辑 将action转换成props

// reducers
const todoAll = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER': // 添加新用户
            return [
                ...state, 
                {
                    id: action.id
                }
            ];
        case 'DELETE_USER': // 删除旧用户
            state.pop();
            return state;
        default:
            return state;
    }
}

const todoOne = (state = '', action) => {
    switch (action.type) { // 更新用户信息
        case 'EDIT_USER':
            return ; // 待定
        default:
            return state;
    }
}

const reducers = combineReducers({
    todoAll,
    todoOne
})

// connects
