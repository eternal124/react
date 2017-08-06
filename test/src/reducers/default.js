import chooseOne from '../component/chooseOne'


const initialState = {
    // 左 导航条
    todolist: {
        isAdd: false, // 是否选择添加用户
        isSearchOrChange: false,  // 是否选择查找|修改用户
        isDelete: false,  // 是否选择删除用户
    },

    // 中 所有用户的显示
    users: {...chooseOne}, // 解构 chooseOne, 结果为 users ：peoples

    // // 右 各种操作view
    // change: {
    //     add: {},     // 当isAdd为true, add为空 当isEdit为true, add为要编辑的用户
    //     del: [],     // 姓名数组
    //     sch: '',     // 查找内容
    //     isEdit: false // 是否选择编辑
    // }
    
}


