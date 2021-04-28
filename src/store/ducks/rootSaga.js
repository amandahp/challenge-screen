import { all, fork } from 'redux-saga/effects'

export default function* IndexSagas() {
  return yield all([fork('teste')])
}
