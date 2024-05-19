import { createSlice } from '@reduxjs/toolkit'


const initialState={
  amount: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1
    },
    incrementByAmount: (state,action) => {
      state.amount += Number(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer