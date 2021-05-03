import { all, fork } from 'redux-saga/effects'
import { watchInstallment } from './home/saga'

export default function* IndexSagas() {
  return yield all([fork(watchInstallment)])
}
