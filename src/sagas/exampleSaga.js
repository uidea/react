import { put, takeEvery, call } from 'redux-saga/effects'
import axios from "axios";


export function* incrementAsync() {
    //const res = yield call('/mock/manifest.json', {})
    const res = yield axios.get('/mock/manifest.json', {})
    yield put({ type: 'INCREMENT', payload: res.data })
}

export function* exampleSaga() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}