import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuiv4 } from "uuid";

const initialState = {
  books: []
}

const updateLocalStorage = (newBooksArray) => {
  localStorage.setItem('bookData', JSON.stringify(newBooksArray))
}

const librarySlice = createSlice({
  name: 'library',
  initialState, // state
  reducers: { // Reducers
    getLocalStorageData: (state) => { // Action {type: 'library/getLocalStorageData'}
      state.books = JSON.parse(localStorage.getItem('bookData'))
    },
    addBook: (state, action) => { // Action {type: 'library/addBook', payload: []}
      const newBook = { id: uuiv4(), title: action.payload.title, author: action.payload.author }
      state.books.push(newBook)
      updateLocalStorage(state.books)
    }
  }
})

export default librarySlice.reducer
export const { addBook, getLocalStorageData } = librarySlice.actions