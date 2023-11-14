import { todoReducer } from "./slices/todoSlice/todos";
import { ignorEmpatyTodo, isEditingTodo } from "./Middleware/MiddlewareTodo";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {todos: todoReducer},
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ignorEmpatyTodo, isEditingTodo)
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ignorEmpatyTodo, isEditingTodo]
}, )

export default store;
