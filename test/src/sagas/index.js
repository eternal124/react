import { takeEvery } from 'redux-saga'
import { select, put, take, call, fork } from 'redux-saga/effects'

function* init() {
    try {
        const tag = yield select(state => state.inited)
        const users = yield fetch("http://localhost:3000/users").then(res=>res.json())
        yield put({ type: 'INIT_STATE', payload: users });
    } catch (error) {
        yield put({ type: 'FAILED', error });
    }
}

function* search() {
    try {
        const { name } = yield take('SEARCH_USER')
        const result = yield fetch("http://localhost:3000/users?name=" + name).then(res=>res.json())
        yield put({ type: 'SEARCH_USER', payload: result[0] });
    } catch (error) {
        yield put({ type: 'FAILED', error });
    }
}

function* add() {
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
        }).then(res=>res.json())
        console.log(id)
        update()
    } catch (error) {
        yield put({ type: 'FAILED', error });
    }
}

function* deleteUser() {
    try {
        const { id } = yield take('DELETE_USER')
        for (let i in id) {
            yield fetch("http://localhost:3000/users/" + id[i], { method: 'delete' });
        }
        update()
    } catch (error) {
        yield put({ type: 'FAILED', error });
    }
}

function* edit() {
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
}

function* update() {
    try {
        yield take('UPDATE_STATE')
        const users = yield fetch("http://localhost:3000/users").then(res=>res.json());
        yield put({type: 'UPDATE_STATE', payload: users})
    } catch (error) {
        yield put({ type: 'FAILED', error });
    }
} 

export function* rootSaga(){
    yield [
        fork(init),
        fork(search),
        fork(add),
        fork(deleteUser),
        fork(edit)
    ]
}