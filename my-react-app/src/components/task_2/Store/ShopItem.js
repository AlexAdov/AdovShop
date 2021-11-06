import React from "react";
import PropTypes from "prop-types";

export function ShopItem(props) {
   return (
      <li className="shopitem">
         <img className="shopitem_img" src={props.item.img} />
         <h2 className="shopitem_title">{props.item.name}</h2>
         <p className="shopitem_color">{props.item.color}</p>
         <p className="shopitem_price">${props.item.price}</p>
         <button>Add to cart</button>
      </li>
   );
}

ShopItem.propTypes = {
   item: PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
   }),
};
