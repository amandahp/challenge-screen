import { call, put } from 'redux-saga/effects'
import { fetchDataSuccess, fetchDataError } from './actions'

export function* getData() {
  try {
    const data = yield call(getData)
    yield put(fetchDataSuccess(data))
  } catch (err) {
    yield put(fetchDataError(err))
    console.log(err)
  }
}
