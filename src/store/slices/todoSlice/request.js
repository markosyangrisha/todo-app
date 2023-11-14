import { createAsyncThunk } from "@reduxjs/toolkit";
const URL_TODOS = 'http://localhost:3001/todos';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, {rejectWithValue}) => {
    try {
      const response = await fetch(URL_TODOS);

      if(!response.ok) {
        throw new Error('Server Error');
      }
        return await response.json();

    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)