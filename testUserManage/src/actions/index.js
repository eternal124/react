// actions
export const onAdd = user => { // 点击添加按钮
    return {
        type: 'useManege/ADD_USER',
        user
    }
}

export const onDelete = id => { // 删除哪几个用户 可能是数组
    return {
        type: 'useManege/DELETE_USER',
        id
    }
}

export const onSearch = name => {
    return {
        type: 'useManege/SEARCH_USER',
        payload: {},
        name
    }
}

export const onEdit = user => { // 点击编辑按钮
    return {
        type: 'useManege/EDIT_USER',
        user
    }
}

