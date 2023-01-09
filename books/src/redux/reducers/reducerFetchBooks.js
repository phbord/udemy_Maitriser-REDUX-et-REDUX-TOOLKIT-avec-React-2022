import { FETCH_BOOKS_LOADING, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_ERROR } from "../constants"

const initialState = {
  isLoading: false,
  fetchedBooks: [],
  error: ''
}

const reducerFetchBooks = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        fetchedBooks: action.payload,
        error: ''
      }
    case FETCH_BOOKS_ERROR:
      return state
    default:
      return {
        ...state,
        fetchedBooks: [],
        error: action.payload
      }
  }
}

export default reducerFetchBooks