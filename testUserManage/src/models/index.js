import { routerRedux } from 'dva/router'
import * as userOperator from '../services/index'

export default {

  namespace: 'userManage',

  state: {
    users: [],
    user: [],
    editId: 0
  },

  reducers: {
    ['GET_STATE'](state, { payload: users }) {
      return {
        ...state,
        users,
      }
    },
    ['TO_EDIT'](state, {payload: id}){
      return {
        ...state,
        editId: id
      }
    },
    ['SEARCH_USER'](state, { payload: user}) {
      return {
        ...state,
        user
      }
    }
  },

  effects: {
    *getState(action, { put, call }) {
        const users = yield call(userOperator.getState)
        console.log('GetStateEffects: ', users)
        yield put({ type: 'GET_STATE', payload: users });
    },
    *search({ select, input }, { put, call }) {
      const user = yield call(userOperator.search, select, input)
      console.log('SelectEffects: ', user)
      yield put({ type: 'SEARCH_USER', payload: user });
      yield put(routerRedux.push('/seechange/user'))
    },
    *add({ user }, { put, call }) {
      const users = yield call(userOperator.add, user)
      console.log('AddEffects: ', users)
      yield put({ type: 'getState'});
      yield put(routerRedux.push('/add/success'))
    },
    *deleteUser({ id }, { put, call }) {
      yield call(userOperator.deleteUser, id)
      console.log('DeleteEffects: ', id)
      yield put({ type: 'getState'});
      yield put(routerRedux.push('/delete/success'))
    },
    *toEdit({id}, {put, call}){
      yield put({ type: 'TO_EDIT', payload: id})
      yield put(routerRedux.push(`/edit/${id}`))
    },
    *edit({ user }, { put, call }) {
      yield call(userOperator.edit, user)
      console.log('EditEffects: ', user)
      yield put({ type: 'getState'});
      yield put(routerRedux.push('/edit/success'))
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/' || pathname === '/home') {
          dispatch({ type: 'getState'});
        }
      });
    },
  }
};
