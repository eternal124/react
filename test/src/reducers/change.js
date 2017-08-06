case 'EDIT_USER': // 查找过后 进行编辑
            return Object.assign({}, state, {
                isAdd: false,
                isSearchOrChange: true,
                isDelete: false,
                isEdit:true,
                users:  state.users.map((user) => {
                    if (user.name === action.user.name) {
                        return Object.assign({}, user, {
                            ...action.user
                        })
                    }
                    return user
                })
            });