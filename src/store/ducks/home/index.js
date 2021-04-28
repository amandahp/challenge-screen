export const initialState = {
  data: [],
  loading: false,
  error: false
}

const reducer = (state = initialState, action) => {
  switch (action) {
    case 'FETCH_DATA':
      return { ...state, loading: true }
    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload }
    case 'FETCH_DATA_ERROR':
      return { ...state, loading: false, error: action.error }
    default:
      return state
  }
}

export default reducer
