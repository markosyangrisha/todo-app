import { useDispatch, useSelector } from "react-redux";
import {selectTodos} from "../../store/slices/todoSlice/select";
import { onClearTodo } from "../../store/slices/todoSlice/todos";

import "./TodoFooter.css";

const TodoFooter = () => {

  const dispatch = useDispatch();
  const stateTodos = useSelector(selectTodos);
  const completed = stateTodos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="todo-footer">
      <span>
        {completed} / {stateTodos.length} Completed
      </span>
      <button
        className="button-3"
        onClick={() =>
          dispatch(onClearTodo({ isCompleted: stateTodos.isCompleted }))
        }
      >
        Clear All
      </button>
    </div>
  );
};

export default TodoFooter;
