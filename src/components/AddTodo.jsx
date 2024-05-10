import React, { useState } from "react";

const AddTodo = ({ createTodo }) => {
  const [todo, setTodo] = useState("");
  const submitTodo = (e) => {
    e.preventDefault();
    console.log("In Todo " + todo);
    createTodo(todo);
    setTodo("");
  };
  return (
    <form
      className="flex justify-evenly items-center my-10"
      onSubmit={submitTodo}
    >
      <input
        type="text"
        className="bg-gray-600 ml-2 text-xl rounded-md border border-gray-300 placeholder:text-gray-300 p-3 w-[70%]"
        placeholder="What's next todo?"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button
        type="submit"
        className="bg-gray-900 p-3 text-xl rounded-lg hover:bg-gray-950"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
