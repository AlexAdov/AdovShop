import React from "react";
import ShopItemClassI from "./ShopItemClassI";

class ShopItemClass extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
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
                  <ShopItemClassI item={item} />
               </div>
            </div>
         </div>
      );
   }
}

export default ShopItemClass;
