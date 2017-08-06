

const initialState = {
    isAdd: false, // 是否选择添加用户
    isSearchOrChange: false,  // 是否选择查找|修改用户
    isDelete: false,  // 是否选择删除用户
}

function addUser(state, action) {
    return Object.assign({}, state, {
        isAdd: true, // 是否选择添加用户
        isSearchOrChange: false,  // 是否选择查找|修改用户
        isDelete: false,  // 是否选择删除用户
    })
}

function searchUer(state, action) {
    return Object.assign({}, state, {
        isAdd: false, // 是否选择添加用户
        isSearchOrChange: true,  // 是否选择查找|修改用户
        isDelete: false,  // 是否选择删除用户
    })
}

function deleteUser(state, action) {
    return Object.assign({}, state, {
        isAdd: false, // 是否选择添加用户
        isSearchOrChange: false,  // 是否选择查找|修改用户
        isDelete: true,  // 是否选择删除用户
    })
}

const todolist = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_USER':
            return addUser(state, action)
        case 'SEARCH_USER':
            return searchUer(state, aciton)
        case 'DELETE_USER':
            return deleteUser(state, action)
        default :
            return state;
    }
}

export default todolist