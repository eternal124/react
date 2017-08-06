// actions
export const onAdd = user => { // 点击添加按钮
    return {
        type: 'ADD_USER',
        user
    }
}

export const onDelete = name => { // 删除哪几个用户 可能是数组
    return {
        type: 'DELETE_USER',
        name
    }
}

export const onSearch = value => {
    return {
        type: 'SEARCH_USER',
        value
    }
}

export const onEdit = user => { // 点击编辑按钮
    return {
        type: 'EDIT_USER',
        user
    }
}

