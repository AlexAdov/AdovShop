import React, { useState } from "react";
import { Raiting } from "./Films";
import { Shop } from "./Shop";



function Task_3() {
  const [task, setTask] = useState("portfolio");

  const handleClick = (e) => {
    const task = e.currentTarget.dataset.name;
    setTask(task);
  };
  return (
    <div>
      <nav className="nav2">
        <button data-name="portfolio" onClick={handleClick}>Рейтинг фильмов</button>
        <button data-name="placement" onClick={handleClick}>Список предложений</button>
      </nav>
      <div className="cont">
        {(() => {
          switch (task) {
            case "portfolio":
              return <Raiting />;
            case "placement":
              return <Shop />;
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
}

export default Task_3;
