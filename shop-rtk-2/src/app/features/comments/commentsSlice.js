import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
  isLoading: false,
  comments: [],
  error: ''
}

export const fetchComments = createAsyncThunk(
    'comments/fetchComments', 
    () => axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.data)
            // catch(err) => géré automatiquement avec RTK
    /*
      RequestStatus: 'Pending', 'Fulfilled', 'Rejected'

      // version 1
      Action {
        type: fetchComments.pending,
        meta: {request.id: string, requestStatus: 'pending'}
      }
      // version 2
      Action {
        type: comments/fetchComments/pending,
        meta: {request.id: string, requestStatus: 'pending'}
      }

      Action {
        type: fetchComments.fulfilled,
        payload: [],
        meta: {request.id: string, requestStatus: 'pending'}
      }

      Action {
        type: fetchComments.rejected,
        meta: {request.id: string, requestStatus: 'pending'}
        error: {name: string, message: string, code: string}
      }
    */
)

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.isLoading = false
      state.comments = action.payload
      state.error = ''
    })
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.isLoading = false
      state.comments = []
      state.error = action.error.message
    })
  }
})

export default commentSlice.reducer