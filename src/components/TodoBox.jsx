import React from "react";
import Todo from "./Todo";

export default function TodoBox({ tasks, onComplete ,onDelete}) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.isCompleted).length;

  return (
    <>
      <header className="header">
        <div>
          <p>Create Tasks</p>
          <span>{totalTasks}</span>
        </div>
        <div>
          <p>Completed Tasks</p>
          <span>
            {completedTasks} of {totalTasks}
          </span>
        </div>
      </header>

      <section className="todo-box">
        {tasks
          .slice(0)
          .reverse()
          .map((task) => {
            return <Todo key={task.id} task={task} onComplete={onComplete} onDelete={onDelete}/>;
          })}
      </section>
    </>
  );
}
