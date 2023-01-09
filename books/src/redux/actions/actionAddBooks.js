import { ADD_BOOKS, DELETE_BOOK, DELETE_ALL_BOOKS } from "../constants"

export const addBook = (data) => {
  return {
    type: ADD_BOOKS,
    payload: data, // Objet comprenant "title" + "author"
  }
}

export const deleteBook = (id) => {
  return {
    type: DELETE_BOOK,
    payload: id, // équivaut à "data.id"
  }
}

export const deleteAllBooks = () => {
  return {
    type: DELETE_ALL_BOOKS,
  }
}