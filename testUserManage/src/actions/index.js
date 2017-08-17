// actions
export const onAdd = user => { // 点击添加按钮
    return {
        type: 'userManage/add',
        user
    }
}

export const onDelete = id => { // 删除哪几个用户 可能是数组
    return {
        type: 'userManage/deleteUser',
        id
    }
}

export const onSearch = (select, input) => {
    return {
        type: 'userManage/search',
        select, 
        input
    }
}

export const onEdit = user => { // 点击编辑按钮
    return {
        type: 'userManage/edit',
        user
    }
}

