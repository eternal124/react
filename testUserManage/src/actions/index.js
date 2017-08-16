// actions
export const onAdd = user => { // 点击添加按钮
    return {
        type: 'useManege/add',
        user
    }
}

export const onDelete = id => { // 删除哪几个用户 可能是数组
    return {
        type: 'useManege/deleteUser',
        id
    }
}

export const onSearch = id => {
    return {
        type: 'useManege/search',
        id
    }
}

export const onEdit = user => { // 点击编辑按钮
    return {
        type: 'useManege/edit',
        user
    }
}

