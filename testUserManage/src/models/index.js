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
        users: users,
        user: users,
        editId: 0
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
        user: typeof user === 'Object' ? [user] : user
      }
    }
  },

  effects: {
    *getState(action, { put, call }) {
        const users = yield call(userOperator.getState)
        console.log('GetStateEffects: ', users)
        yield put({ type: 'GET_STATE', payload: users });
    },
    *clickOne({ id }, {put, call}){
      yield put({type:'search', select: 'id', input: id})
    },
    *search({ select, input }, { put, call }) {
      const user = yield call(userOperator.search, select, input)
      console.log('SelectEffects: ', user)
      yield put({ type: 'SEARCH_USER', payload: user });
      yield put(routerRedux.push('/seechange/user'))
    },
    *add({ user }, { put, call }) {
      yield call(userOperator.add, user)
      console.log('AddEffects')
      yield put(routerRedux.push('/home'))
    },
    *deleteUser({ id }, { put, call }) {
      yield call(userOperator.deleteUser, id)
      console.log('DeleteEffects: ', id)
      yield put(routerRedux.push('/home'))
    },
    *toEdit({id}, {put, call}){
      console.log(id)
      yield put({ type: 'TO_EDIT', payload: id})
      yield put(routerRedux.push(`/edit/${id}`))
    },
    *edit({ user }, { put, call }) {
      yield call(userOperator.edit, user)
      console.log('EditEffects: ', user)
      yield put(routerRedux.push('/home'))
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
