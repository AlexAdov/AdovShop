import React, { useState } from "react";
import { Cards } from "./Cards";
import { Decomposition } from "./Decomposition";

export function Task_4() {
   const [task, setTask] = useState("cards");

   const handleClick = (e) => {
      const task = e.currentTarget.dataset.name;
      setTask(task);
   };

   return (
      <div>
         <nav className="nav2">
            <button data-name="cards" onClick={handleClick}>
               Карточки
            </button>
            <button data-name="decomposition" onClick={handleClick}>
               Декомпозиция
            </button>
         </nav>
         {(() => {
            switch (task) {
               case "cards":
                  return <Cards />;
               case "decomposition":
                  return <Decomposition />;
               default:
                  return null;
            }
         })()}
      </div>
   );
}
