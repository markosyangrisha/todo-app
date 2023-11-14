import { createSlice } from "@reduxjs/toolkit";
import { idGenerator } from "../../../hooks/idGenerator";

import { fetchTodos } from "./request";

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
}

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    text: "",
    isEditing: null,
    search: "",
    filteredTodo: [],
    status: null,
    error: null
  },
  reducers: {
    toggleText(state, { payload }) {
      state.text = payload;
    },
    addTodo(state) {
      state.todos.push({id: idGenerator(state.todos), tdText: state.text, isCompleted: false});
      state.text = "";
    },
    deleteTodo(state, { payload }) {
      state.todos.splice(payload, 1)
    },
    checkidTodo(state, { payload }) {
       return {
        ...state,
        todos:state.todos.map((todo) =>
        todo.id === payload.newTodo.id ? payload.newTodo : todo)
       }
    },
    onClearTodo(state) {
       return {
        ...state,
        todos: state.todos.filter((todo) => !todo.isCompleted)
       }
    },
    editTodo(state, { payload }) {
        state.isEditing = payload
        state.text = payload.tdText
    },
    editingTodoItem(state) {
      return {
        ...state,
         todos: state.todos.map((todo) =>
          todo.id === state.isEditing.id ? { ...todo, tdText: state.text } : todo),
          isEditing: null,
          text: ''
      }
      },
    searchTodo(state, { payload }) {
          state.search = payload
    },
},
extraReducers: {
  [fetchTodos.pending]: (state, {payload}) => {
    state.status = 'loading'
    state.error = null
  },
  [fetchTodos.fulfilled]: (state, {payload}) => {
    state.status = 'resolve'
    state.todos = payload
  },
  [fetchTodos.rejected]: setError
}
})

export const {
  toggleText,
  addTodo,
  deleteTodo,
  editTodo,
  editingTodoItem,
  searchTodo,
  checkidTodo,
  onClearTodo,
  filteredTodo,
} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
