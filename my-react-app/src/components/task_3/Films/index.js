import React from "react";
import Stars from "./Stars";
import { uniqueId } from "lodash";

export function Raiting() {
   const count = Math.floor(Math.random() * 5);
console.log(count)
   return (
      <>
         <div className="bl">
            {count > 0 && count <= 5 && !Number.isNaN(count) && (
               <Stars count={count} key={uniqueId("stars_")} />
            )}
         </div>
      </>
   );
}
