import React, { useState } from "react";
import Portfolio from "./Portfolio";
import { Store } from "./Store";


function Task_2() {
  const [task, setTask] = useState("portfolio");

  const handleClick = (e) => {
    const task = e.currentTarget.dataset.name;
    setTask(task);
  };
  return (
    <div>
      <nav Style={"margin-top:45px;"}>
        <button data-name="portfolio" onClick={handleClick}>Портфолио</button>
        <button data-name="placement" onClick={handleClick}>Расположение</button>
      </nav>
        {(() => {
          switch (task) {
            case "portfolio":
              return <Portfolio />;
            case "placement":
              return <Store />;
            default:
              return null;
          }
        })()}
    </div>
  );
}

export default Task_2;
