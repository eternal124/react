import { takeEvery } from 'redux-saga'
import { put, take, call, fork } from 'redux-saga/effects'

function* init() {
    try {
        const tag = select(state => state.inited)
        if (tag) {
            yield take('UPDATE_STATE')
            const users = yield call(fetch, "http://localhost:3000/users");
            yield put({ type: 'UPDATE_STATE', payload: users });
        } else {
            const users = yield call(fetch, "http://localhost:3000/users");
            yield put({ type: 'INIT_STATE', payload: users });
        }
        
    } catch (error) {
        yield put({ type: 'FAILED', error });
    }
}

function* search() {
    try {
        const { name } = yield take('SEARCH_USER')
        const result = yield call(fetch, "http://localhost:3000/users?name=" + name);
        yield put({ type: 'SEARCH_USER', payload: result });
    } catch (error) {
        yield put({ type: 'FAILED', error });
    }
}

function* add() {
    try {
        const { user } = yield take('ADD_USER')
        console.log('-----------add---------')
        yield call(fetch, "http://localhost:3000/users", {
            method: 'post',
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        yield put({ type: 'UPDATE_STATE'});
    } catch (error) {
        yield put({ type: 'FAILED', error });
    }
}

function* deleteUser() {
    try {
        console.log('----------delete-----------')
        const { names } = yield take('DELETE_USER')
        for (let i in names) {
            yield call(fetch, "http://localhost:3000/users?name=" + names[i], { method: 'delete' });
        }
        yield put({ type: 'UPDATE_STATE'});
    } catch (error) {
        yield put({ type: 'FAILED', error });
    }
}

function* update() {
    try {
        console.log('----------update-----------')
        const { user } = yield take('EDIT_USER')
        yield call(fetch, "http://localhost:3000/users?name=" + user.name, {
            method: 'put',
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        yield put({ type: 'UPDATE_STATE'});
    } catch (error) {
        yield put({ type: 'FAILED', error });
    }
}


export function* rootSaga(){
    yield [
        fork(init),
        takeEvery('SEARCH_USER', search),
        takeEvery('ADD_USER', add),
        takeEvery('DELETE_USER', deleteUser),
        takeEvery('EDIT_USER', update)
    ]
}