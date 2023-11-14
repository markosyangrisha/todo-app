// import { actionEdtiingTodoItem } from "../slices/todoSlice/action";
import { editingTodoItem } from "../slices/todoSlice/todos";

export const ignorEmpatyTodo = (store) => (next) => (action) => {
  const {todos} = store.getState()

  if(action.type === 'todos/addTodo' && !todos.text.trim()) return
  next(action);
}

export const isEditingTodo = (store) => (next) => (action) => {
  const {todos} = store.getState()
  
  if(todos.isEditing && action.type === 'todos/addTodo') {
    return store.dispatch(editingTodoItem())
  }
  next(action)
}