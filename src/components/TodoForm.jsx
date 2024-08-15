import React, { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";
import { GrAdd } from "react-icons/gr";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodoContext();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/90 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-blue-700 text-white shrink-0"
      >
        <GrAdd />
      </button>
    </form>
  );
}

export default TodoForm;
