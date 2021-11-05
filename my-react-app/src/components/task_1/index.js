import React, { useState } from "react";
import ShopItemFunc from "./ShopItemFunc";
import ShopItemClass from "./ShopItemClass";

function Task_1() {
   const [task, setTask] = useState("class");

   const handleClick = (e) => {
      const task = e.currentTarget.dataset.name;
      setTask(task);
   };
   return (
      <div>
         <nav Style={"margin-left:245px;"}>
            <button data-name="class" onClick={handleClick}>
               Классовый компонент
            </button>
            <button data-name="func" onClick={handleClick}>
               Функциональный компонент
            </button>
         </nav>
         <div className="cont">
            {(() => {
               switch (task) {
                  case "class":
                     return <ShopItemClass />;
                  case "func":
                     return <ShopItemFunc />;
                  default:
                     return <ShopItemClass />;
               }
            })()}
         </div>
      </div>
   );
}

export default Task_1;
