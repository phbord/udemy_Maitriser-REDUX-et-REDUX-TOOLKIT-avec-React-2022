import { configureStore } from "@reduxjs/toolkit";
import phoneReducer from "./features/phones/phoneSlice";
import tvReducer from "./features/tvs/tvSlice";
import commentReducer from "./features/comments/commentsSlice"

const store = configureStore({
  reducer: {
    phone: phoneReducer,
    television: tvReducer,
    comment: commentReducer,
  }
})

export default store