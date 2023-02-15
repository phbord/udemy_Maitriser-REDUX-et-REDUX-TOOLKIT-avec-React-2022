import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tvs: 10
}

const tvSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: { // Reducers
    tvs: (state, action) => { // Action {type: 'tv/tvs', payload: any}
      state.tvs -= action.payload
    },
    addTvs: (state, action) => { // Action {type: 'tv/tvs', payload: any}
      state.tvs += action.payload
    }
  }
})

export default tvSlice.reducer
export const { tvs, addTvs } = tvSlice.actions