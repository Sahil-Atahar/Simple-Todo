import { TbTrash } from "react-icons/tb";
import React from "react";

export default function Todo({ task, onComplete, onDelete }) {
  return (
    <div className="todo">
      <div style={{ display: "flex", alignItems: "center" }}>
        <input type="checkbox" onClick={() => onComplete(task.id)} />
        <p
          style={{ textDecoration: task.isCompleted ? "line-through" : "none" }}
        >
          {task.title}
        </p>
      </div>
      <i>
        <TbTrash onClick={() => onDelete(task.id)} />
      </i>
    </div>
  );
}
