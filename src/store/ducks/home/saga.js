import { call, put, takeLatest } from 'redux-saga/effects'

import { getInstallment } from 'services/index'
import { fetchDataSuccess, fetchDataError } from './actions'

function* getData() {
  console.log('saga')
  try {
    const response = yield call(getInstallment)
    response.data.parcelas.reverse()
    yield put(fetchDataSuccess(response.data))
  } catch (err) {
    yield put(fetchDataError(err))
    console.log(err)
  }
}

export function* watchInstallment() {
  yield takeLatest('FETCH_DATA', getData)
}
