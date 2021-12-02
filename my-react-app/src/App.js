import React, { useState } from "react";
import "./App.css";
import Task_1 from "./components/task_1";
import Task_2 from "./components/task_2";
import { Task_4 } from "./components/task_4";
import Task_3 from "./components/task_3";

function App() {
  const [task, setTask] = useState("task2");

  const handleClick = (e) => {
    const task = e.currentTarget.dataset.name;
    setTask(task);
  };

  return (
    <div>
      <nav>
        <button data-name="task1" onClick={handleClick}>
          Компоненты
        </button>
        <button data-name="task2" onClick={handleClick}>
          События
        </button>
        <button data-name="task3" onClick={handleClick}>
               Пропсы
            </button>
        <button data-name="task4" onClick={handleClick}>
          Композиция
        </button>
      </nav>

      {(() => {
        switch (task) {
          case "task1":
            return <Task_1 />;
          case "task2":
            return <Task_2 />;
            case "task3":
               return <Task_3 />;
          case "task4":
            return <Task_4 />;
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default App;
