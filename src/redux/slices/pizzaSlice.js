import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params, thunkAPI) => {
  try {
    const { order, category, search, sortBy, currentPage } = params;
    const { data } = await axios.get(
      `https://64bf90170d8e251fd11105e3.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    );
    if (data.length === 0) {
      return thunkAPI.rejectWithValue('Пиццы пустые');
    }
    return thunkAPI.fulfillWithValue(data);
  } catch (err) {
    console.log(err);
  }
});

const initialState = {
  pizzas: [],
  status: 'loading',
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.pizzas = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
      state.pizzas = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.pizzas = action.payload;
      state.status = 'succes';
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'error';
      state.pizzas = [];
    },
  },
});

export const selectPizzaData = (state) => state.pizza;

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
// const [isLoading, setIsLoading] = React.useState(true);
