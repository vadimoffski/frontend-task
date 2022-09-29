import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getOneProduct = createAsyncThunk(
  'product/getOneProduct',
  async function (id, { rejectWithValue }) {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`)
      if (response.status !== 200) {
        throw new Error('Server Error!');
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: {},
    status: null,
    error: null,
  },
  reducers: {
  },
  extraReducers: {
    //getProducts
    [getOneProduct.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },

    [getOneProduct.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.product = action.payload;
    },

    [getOneProduct.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    }
  },
})

export const { } = productSlice.actions

export default productSlice.reducer