import React, { useEffect, useState } from "react";
import { listTodos } from "../../services/TodoService";
import Todo from "../Todo/Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    listTodos()
      .then((todos) => {
        setTodos(todos);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="m-auto mt-5" style={{ width: "500px" }}>
      <ul className="list-group">
        {!loading
          ? todos.map((todo) => {
              return <Todo handleDelete={removeTodo} key={todo.id} {...todo} />;
            })
          : "LOADING..."}
      </ul>
    </div>
  );
};

export default TodoList;
