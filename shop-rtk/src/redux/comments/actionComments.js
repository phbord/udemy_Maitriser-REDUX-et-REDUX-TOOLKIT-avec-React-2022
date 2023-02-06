import axios from 'axios'
import { LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_ERROR } from './type'

const loadApiComments = () => {
  return {
    type: LOAD_COMMENTS
  }
}

const loadApiCommentsSuccess = (comments) => {
  return {
    type: LOAD_COMMENTS_SUCCESS,
    payload: comments
  }
}

const loadApiCommentsError = (error) => {
  return {
    type: LOAD_COMMENTS_ERROR,
    payload: error
  }
}

export const apiCall = () => {
  return (dispatch) => {
    dispatch(loadApiComments())
  
    axios.get('https://jsonplaceholder.typicode.com/comments')
          .then(res => {
            dispatch(loadApiCommentsSuccess(res.data))
          })
          .catch(err => {
            dispatch(loadApiCommentsError(err.message))
          })
  }
}