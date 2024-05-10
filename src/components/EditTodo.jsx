import React, { useState } from "react";

const EditTodo = ({ editTodo, task }) => {
  const [todo, setTodo] = useState("");
  const submitTodo = (e) => {
    e.preventDefault();
    console.log("In Todo " + todo);
    editTodo(todo, task.id);
    setTodo("");
  };
  return (
    <form
      className="flex items-center justify-between p-5 bg-gray-600 rounded-md mb-3 mx-10"
      onSubmit={submitTodo}
    >
      <input
        type="text"
        className="bg-gray-600 ml-2 text-xl rounded-md border border-gray-300 placeholder:text-gray-300 p-3 w-[70%]"
        placeholder="Update todo..."
        onChange={(e) => setTodo(e.target.value)}
        value={task.value}
      />
      <button
        type="submit"
        className="bg-gray-900 p-3 text-xl rounded-lg hover:bg-gray-950"
      >
        Edit Todo
      </button>
    </form>
  );
};

export default EditTodo;
