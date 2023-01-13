import "./style/style.css";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoBox from "./components/TodoBox";
import { useState, useEffect } from "react";

function App() {
  let KEY = "SATODO";
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  function loadTasks() {
    setTasks(JSON.parse(localStorage.getItem(KEY)));
  }

  function addTask(taskTitle) {
    setAndSaveTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTask(taskId) {
    let newTasks = tasks;
    newTasks = newTasks.filter((task) => task.id !== taskId);
    setAndSaveTasks(newTasks);
  }

  function toogleCompleteTasks(taskId) {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setAndSaveTasks(newTasks);
  }

  function setAndSaveTasks(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(KEY, JSON.stringify(newTasks));
  }

  return (
    <div className="body-box">
      <Header />
      <Input addTask={addTask} />
      <TodoBox
        tasks={tasks}
        onComplete={toogleCompleteTasks}
        onDelete={deleteTask}
      />
    </div>
  );
}

export default App;
