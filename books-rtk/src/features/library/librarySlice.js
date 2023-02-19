import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuiv4 } from "uuid";

const initialState = {
  books: []
}

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: { // Reducers
    addBook: (state, action) => { // Action {type: 'library/addBook', payload: []}
      const newBook = { id: uuiv4(), title: action.payload.title, author: action.payload.author }
      state.books.push(newBook)
    }
  }
})

export default librarySlice.reducer
export const { addBook } = librarySlice.actions