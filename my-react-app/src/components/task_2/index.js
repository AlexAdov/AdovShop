import React, { useState } from "react";
import Portfolio from "./Portfolio";
import { Store } from "./Store";
import DrDown from "./DrDown";

function Task_2() {
   const [task, setTask] = useState("portfolio");

   const handleClick = (e) => {
      const task = e.currentTarget.dataset.name;
      setTask(task);
   };
   return (
      <div>
         <nav Style={"margin-left:245px;"}>
            <button data-name="portfolio" onClick={handleClick}>
               Портфолио
            </button>
            <button data-name="placement" onClick={handleClick}>
               Расположение
            </button>
         </nav>
         <div className="cont">
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
      </div>
   );
}

export default Task_2;
