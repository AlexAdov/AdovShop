import React from "react";
import ShopItemFuncI from "./ShopItemFuncI";

function ShopItemFunc() {
   const item = {
      brand: "Tiger of Sweden",
      title: "Leonard coat",
      description: "Minimalistic coat in cotton-blend",
      descriptionFull:
         "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.",
      price: 399,
      currency: "£",
   };
   return (
      <div>
         <div className="container">
            <div className="background-element"></div>
            <div className="highlight-window">
               <div className="highlight-overlay"></div>
            </div>
            <div className="window">
               <ShopItemFuncI item={item} />
            </div>
         </div>
      </div>
   );
}

export default ShopItemFunc;
