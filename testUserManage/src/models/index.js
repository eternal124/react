import * as userOperator from '../services/index'

export default {

  namespace: 'useManage',

  state: {
    users: [],
    user: {}
  },

  reducers: {
    ['GET_STATE'](state, { payload: users }) {
      return {
        ...state,
        users,
      }
    },
    ['SEARCH_USER'](state, { payload: user }) {
      return {
        ...state,
        user
      }
    }
  },

  effects: {
    *getState(action, { put, call }) {
        const users = yield call(userOperator.getState)
        yield put({ type: 'GET_STATE', payload: users });
    },
    *search({ id }, { put, call }) {
      const user = yield call(userOperator.search, id)
      yield put({ type: 'SEARCH_USER', payload: user });
    },
    *add({ user }, { put, call }) {
      const users = yield call(userOperator.add, user)
      yield put({ type: 'getState'});
    },
    *deleteUser({ id }, { put, call }) {
      yield call(userOperator.deleteUser, id)
      yield put({ type: 'getState'});
    },
    *edit({ user }, { put, call }) {
      yield call(userOperator.edit, user)
      yield put({ type: 'getState'});
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      const reg = /^\/\w$/;
      return history.listen(({ pathname}) => {
        // if (reg.test(pathname)) {
        if (pathname === '/') {
          dispatch({ type: 'getState'});
        }
      });
    },
  }
};
