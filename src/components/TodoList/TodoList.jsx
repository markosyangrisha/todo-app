import { selectFilteredTodo, selectSearch, selectTodos } from "../../store/slices/todoSlice/select";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const stateTodos = useSelector(selectTodos)
  const todoSearch = useSelector(selectSearch);
  const todoFiltered = useSelector(selectFilteredTodo);

  const newFilteredTodo = stateTodos.filter((todo) =>
    todo.tdText.toLowerCase().includes(todoSearch.toLowerCase())
  );

  return (
    <div className="todo-list">
      {newFilteredTodo.map((todo) => {
        return (
          <div key={todo.id}>
            <TodoItem todo={todo} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
