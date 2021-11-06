import React from 'react';
import PropTypes from 'prop-types';

export function ShopCard(props){
    return (
         <div className="shopcard">
            <h2 className="shopcard_title">{props.item.name}</h2>
            <p className="shopcard_color">{props.item.color}</p>
            <img className="shopcard_img" src={props.item.img} />
            <div className="shopcard_footer">
              <p className="shopcard_price">${props.item.price}</p>
              <button>Add to card</button>
            </div>
         </div>
    );
}

ShopCard.propTypes = {
    item:PropTypes.shape({
        img:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        color:PropTypes.string.isRequired,
        price:PropTypes.string.isRequired,
    }),
};
