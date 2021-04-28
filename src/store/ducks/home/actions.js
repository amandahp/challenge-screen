export function fetchData() {
  return {
    type: 'FETCH_DATA'
  }
}

export function fetchDataSuccess(data) {
  return {
    type: 'FETCH_DATA_SUCCESS',
    data
  }
}

export function fetchDataError(error) {
  return {
    type: 'FETCH_DATA_ERROR',
    error
  }
}
