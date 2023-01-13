import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";

export default function Input({ addTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    addTask(title);
    setTitle("");
  }

  return (
    <div className="input-box">
      <form
        id="input-form"
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <input
          type="text"
          name="input-text"
          id="text-input"
          placeholder="Add a new task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button id="btn-input" onClick={handleSubmit}>
          Create
          <i>
            <AiOutlinePlusCircle />
          </i>
        </button>
      </form>
    </div>
  );
}
