import { useEffect, useRef } from "react";
import { VscSearch } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
// import { actionToggleText, actionSearch } from "../../store/slices/todoSlice/action"; 
import { selectIsEditing, selectText } from "../../store/slices/todoSlice/select";
import { addTodo, getTodos, searchTodo, toggleText } from "../../store/slices/todoSlice/todos";
import "./TodoForm.css";
import { fetchTodos } from "../../store/slices/todoSlice/request";

const TodoForm = () => {
  
  const formRef = useRef(null);
  const isEditing = useSelector(selectIsEditing);
  const text = useSelector(selectText);
  const dispatch = useDispatch(); 

  const AddTodoList = (e) => {
    e.preventDefault();
    formRef.current.focus();
    dispatch(addTodo()); 
  };

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return ( 
    <div className="todo-form">
      <form onSubmit={AddTodoList}>
        <input
          placeholder="New To-Do..."
          type="text"
          ref={formRef}
          value={text}
          onChange={(e) => dispatch(toggleText(e.target.value))}
        />
        <button className="button-3">{isEditing ? "edit" : "add"}</button>
      </form>
      <div className="search-block">
        <input
          type="text"
          placeholder="search"
          onChange={(e) => dispatch(searchTodo(e.target.value))}
        />
        <VscSearch />
      </div>
    </div>
  );
};

export default TodoForm;
