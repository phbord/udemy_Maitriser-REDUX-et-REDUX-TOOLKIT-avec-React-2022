import { createSlice } from '@reduxjs/toolkit'
import { tvs as tvActions } from '../tvs/tvSlice'

const initialState = {
  phones: 5,
  tablets: 10,
}

const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers: { // Reducers
    phones: (state, action) => { // Action {type: 'phone/phones', payload: number}
      state.phones -= action.payload // décrémentation du stock de téléphones
    },
    tablets: (state, action) => { // Action {type: 'phone/tablets', payload: number}
      state.tablets -= action.payload
    }
  },
  extraReducers: (builder) => {
    // CAS :  Si achat de tv => décrémentation du stock de téléphones
    builder.addCase(tvActions, (state, action) => {
      state.phones -= action.payload
    })
  }
  // OU (autre méthode)
/*   extraReducers: {
    // CAS :  Si achat de tv => décrémentation du stock de téléphones
    ['tv/tvs']: (state) => {
      state.phones--
    }
  } */
})

export default phoneSlice.reducer
export const { phones, tablets } = phoneSlice.actions