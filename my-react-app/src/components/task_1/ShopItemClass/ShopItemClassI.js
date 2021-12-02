import React from "react";
import PropTypes from "prop-types";
import ShopModel from "../../../models/ShopModel";

class ShopItemClassI extends React.Component {
   constructor(props) {
      super(props);
   }

   render() {
      const {item} = this.props;

      return (
         <div>
            <div className="main-content">
               <h2>Классовый</h2>
               <h2>{item.brand}</h2>
               <h1>{item.title}</h1>
               <h3>{item.description}</h3>
               <div className="description">{item.descriptionFull}</div>
               <div className="highlight-window mobile">
                  <div className="highlight-overlay"></div>
               </div>
               <div className="divider"></div>
               <div className="purchase-info">
                  <div className="price">
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
