import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get(`https://dummyjson.com/products`)
      if (response.status !== 200) {
        throw new Error('Server Error!');
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message)
    }

  }
);


export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: {},
    status: null,
    error: null,
  },
  reducers: {

  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },

    [getProducts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.products = action.payload;
    },

    [getProducts.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
})

// export const { } = productsSlice.actions

export default productsSlice.reducer