import React from "react";
import PropTypes from "prop-types";
import ShopModel from "../../../models/ShopModel";

class ShopItemClassI extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      const { item } = this.props;

      return (
         <div>
            <div class="main-content">
               <h2>Классовый</h2>
               <h2>{item.brand}</h2>
               <h1>{item.title}</h1>
               <h3>{item.description}</h3>
               <div class="description">{item.descriptionFull}</div>
               <div class="highlight-window mobile">
                  <div class="highlight-overlay"></div>
               </div>
               <div class="divider"></div>
               <div class="purchase-info">
                  <div class="price">
                     {item.currency}
                     {item.price}
                  </div>
                  <button>Добавить в корзину</button>
               </div>
            </div>
         </div>
      );
   }
}

ShopItemClassI.propTypes = {
   item: PropTypes.instanceOf(ShopModel).isRequired,
};

export default ShopItemClassI;
