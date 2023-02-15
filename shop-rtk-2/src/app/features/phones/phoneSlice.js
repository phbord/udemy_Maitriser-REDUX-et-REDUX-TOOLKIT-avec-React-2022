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
    addPhones: (state, action) => { // Action {type: 'phone/addPhones', payload: any}
      state.phones += action.payload // incrémentation du stock de téléphones
    },
    tablets: (state, action) => { // Action {type: 'phone/tablets', payload: number}
      state.tablets -= action.payload
    },
    addTablets: (state, action) => { // Action {type: 'phone/addTablets', payload: any}
      state.tablets += action.payload
    },
  },
  extraReducers: (builder) => {
    // CAS :  Si achat de tv => décrémentation du stock de téléphones
    builder.addCase(tvActions, (state, action) => {
      if (action.payload <= state.phones) {
        state.phones -= action.payload
      }
      else if (action.payload > state.phones) {
        state.phones = 0
      }
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
export const { phones, addPhones, tablets, addTablets } = phoneSlice.actions