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
      <>
         <nav className="nav2">
            <button data-name="shop" onClick={handleClick}>
               Список предложений
            </button>
            <button data-name="films" onClick={handleClick}>
               Рейтинг фильмов
            </button>
         </nav>
         {(() => {
            switch (task) {
               case "shop":
                  return <Shop />;
               case "films":
                  return <Raiting />;
               default:
                  return null;
            }
         })()}
      </>
   );
}

export default Task_3;
