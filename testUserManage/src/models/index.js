
import { put, take, takeEvery, fork, select } from 'dva/saga'

export default {

  namespace: 'useManege',

  state: {
    users: [],
    user: {},
    inited: false
  },

  reducers: {
    ['INIT_STATE'](state, { payload }) {
      return {
        ...state,
        users: payload,
        inited: true
      }
    },
    ['UPDATE_STATE'](state, { payload }) {
      return {
        ...state,
        users: payload
      }
    },
    ['SEARCH_USER'](state, { payload }) {
      return {
        ...state,
        user: payload
      }
    }
  },

  effects: {
    *root() {
      yield [
        fork(init),
        fork(search),
        fork(add),
        fork(deleteUser),
        fork(edit)
      ]
    },
    *init() {
      try {
        const tag = yield select(state => state.inited)
        const users = yield fetch("http://localhost:3000/users").then(res => res.json())
        console.log(users)

        yield put({ type: 'INIT_STATE', payload: users });
      } catch (error) {
        yield put({ type: 'FAILED', error });
      }
    },
    *search() {
      try {
        const { name } = yield take('SEARCH_USER')
        const result = yield fetch("http://localhost:3000/users?name=" + name).then(res => res.json())
        console.log(result[0])

        yield put({ type: 'SEARCH_USER', payload: result[0] });
      } catch (error) {
        yield put({ type: 'FAILED', error });
      }
    },
    *add() {
      try {
        const { user } = yield take('ADD_USER')
        const id = yield fetch("http://localhost:3000/users", {
          method: 'post',
          mode: 'cors',
          header: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        }).then(res => res.json())
        console.log(id)
        update()
      } catch (error) {
        yield put({ type: 'FAILED', error });
      }
    },
    *deleteUser() {
      try {
        const { id } = yield take('DELETE_USER')
        for (let i in id) {
          yield fetch("http://localhost:3000/users/" + id[i], { method: 'delete' });
        }
        update()
      } catch (error) {
        yield put({ type: 'FAILED', error });
      }
    },
    *edit() {
      try {
        const { user } = yield take('EDIT_USER')
        console.log(user)
        yield fetch("http://localhost:3000/users/" + user.id, {
          method: 'put',
          header: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        });
        update()
      } catch (error) {
        yield put({ type: 'FAILED', error });
      }
    },
    *update() {
      try {
        yield take('UPDATE_STATE')
        const users = yield fetch("http://localhost:3000/users").then(res => res.json());
        console.log(users)
        yield put({ type: 'UPDATE_STATE', payload: users })
      } catch (error) {
        yield put({ type: 'FAILED', error });
      }
    }
  }
};
