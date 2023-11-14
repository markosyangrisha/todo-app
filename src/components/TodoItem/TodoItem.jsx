import { useRef } from "react";
import { MdDeleteForever } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
// import { actionCheckid, actionDelete, actionEditItem } from "../../store/slices/todoSlice/action";

import "./TodoItem.css";
import { checkidTodo, deleteTodo, editTodo } from "../../store/slices/todoSlice/todos";

const TodoItem = ({ todo }) => {

  const checkedRef = useRef(null);
  const dispatch = useDispatch();

  const onChangeTodo = () => change({ ...todo, isCompleted: checkedRef.current.checked });

  const change = (newTodo) => dispatch(checkidTodo({ newTodo }));

  return (
    <div className="todo-item">
      <div className="item">
        <input
          type="checkbox"
          name="todo"
          ref={checkedRef}
          onChange={onChangeTodo}
        />
        <label htmlFor="todo" data-content={todo.tdText}> {todo.tdText} </label>
      </div>
      <div className="item-handler">
        <BiEditAlt onClick={() => dispatch(editTodo(todo))} />
        <MdDeleteForever onClick={() => dispatch(deleteTodo({ id: todo.id }))} />
      </div>
    </div>
  );
};

export default TodoItem;
