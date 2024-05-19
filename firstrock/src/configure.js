import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './slices/ReduceSlice';

export const store = configureStore({
    reducer: {
      manage:counterSlice
    },
  })
  