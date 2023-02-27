import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
  isLoading: false,
  fetchedBooks: [],
  error: ''
}

const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
//const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (arg) => {
    const {data} = await axios
                          .get(`https://www.googleapis.com/books/v1/volumes?q=${arg}&key=${GOOGLE_API_KEY}&maxResults=20`)
    return data.items
  }
)
/*
// Pending
{
  type: 'books/fetchBooks/pending',
  meta: {
    arg: 'php',
    requestId: 'ghvelsf',
    requestStatus: 'pending'
  }
}

// Fulfilled
{
  type: 'books/fetchBooks/fulfilled',
  meta: {
    arg: 'php',
    requestId: 'ghvelsf',
    requestStatus: 'fulfilled'
  }
}

// Rejected
{
  type: 'books/fetchBooks/rejected',
  meta: {
    arg: 'php',
    requestId: 'ghvelsf',
    requestStatus: 'rejected'
  },
  error: {
    name: '',
    message: 'PPPP',
    code
  }
}
*/

const bookSlice = createSlice({
  name: 'books',
  initialState, // state
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(fetchBooks.fulfilled, (state, {payload}) => {
      state.isLoading = false
      state.fetchedBooks = payload
      state.error = ''
    })

    builder.addCase(fetchBooks.rejected, (state, {error}) => {
      state.isLoading = false
      state.fetchedBooks = []
      state.error = error.message
    })
  }
})

export default bookSlice.reducer