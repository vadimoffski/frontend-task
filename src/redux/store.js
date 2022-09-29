import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/productSlice'
import productsSlice from './slices/productsSlice'

export const store = configureStore({
  reducer: {
    products: productsSlice,
    product: productSlice,
  },
})