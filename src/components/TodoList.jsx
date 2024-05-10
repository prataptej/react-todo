import React, { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from "uuid";
import EditTodo from "./EditTodo";

uuidv4();

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const createTodo = (todoValue) => {
    console.log(todoValue);
    setTodos([...todos, { id: uuidv4(), task: todoValue, isEditing: false }]);
    console.log(todos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const editTodo = (todoValue, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: todoValue, isEditing: false } : todo
      )
    );
  };

  const startEditing = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="container mx-auto bg-gray-800 p-8 rounded-lg my-10">
      <AddTodo createTodo={createTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodo key={index} editTodo={editTodo} task={todo} />
        ) : (
          <Todo
            todo={todo}
            key={index}
            deleteTodo={deleteTodo}
            startEditing={startEditing}
          />
        )
      )}
    </div>
  );
};

export default TodoList;
