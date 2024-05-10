import React from "react";
import { PencilSimpleLine, Trash } from "@phosphor-icons/react";

const Todo = ({ todo, deleteTodo, startEditing }) => {
  return (
    <div className="flex items-center justify-between p-5 bg-gray-600 rounded-md mb-3 mx-10">
      <label className="text-xl" htmlFor={todo.id}>
        {todo.task}
      </label>
      <div className="flex items-center gap-x-4">
        <PencilSimpleLine size={24} onClick={() => startEditing(todo.id)} />
        <Trash size={24} onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};

export default Todo;
