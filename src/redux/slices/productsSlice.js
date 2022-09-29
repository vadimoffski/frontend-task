import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import uuid4 from "uuid4";

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios.get(`https://dummyjson.com/products`)
      if (response.status !== 200) {
        throw new Error('Server Error!');
      }
      return response.data.products;
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

export const deleteProducts = createAsyncThunk(
  'products/deleteProducts',
  async function (id, { rejectWithValue }) {
    try {
      const response = await axios.delete(`https://dummyjson.com/products/${id}`)
      if (response.status !== 200) {
        throw new Error('Server Error!');
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);

export const createProducts = createAsyncThunk(
  'products/createProducts',
  async function (data, { rejectWithValue }) {
    try {
      let myProduct;
      const response = await axios.post(`https://dummyjson.com/products/add`, data)
      myProduct = { ...response.data, id: uuid4() }
      return myProduct
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
);



export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: null,
    error: null,
  },
  reducers: {
    sortHandler: (state, action) => {
      if (action.payload === 'alphabet') {
        state.products = state.products.sort((a, b) => (a.title > b.title ? 1 : -1))
      } else if (action.payload === 'stock') {
        state.products = state.products.sort((a, b) => (a.stock - b.stock))
      }
    },
  },
  extraReducers: {
    //getProducts
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
    //deleteProducts
    [deleteProducts.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },

    [deleteProducts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.products = state.products?.filter(el => el.id !== action.payload.id)
    },

    [deleteProducts.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    //createProducts
    [createProducts.pending]: (state, action) => {
      state.status = 'loading';
      state.error = null;
    },

    [createProducts.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.products = [...state.products, action.payload]
    },

    [createProducts.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
})

export const { sortHandler } = productsSlice.actions

export default productsSlice.reducer