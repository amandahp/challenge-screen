export function fetchData() {
  return {
    type: 'FETCH_DATA'
  }
}

export function fetchDataSuccess(payload) {
  console.log('aqui', payload)
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload
  }
}

export function fetchDataError(error) {
  return {
    type: 'FETCH_DATA_ERROR',
    error
  }
}
