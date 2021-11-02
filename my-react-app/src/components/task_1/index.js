import React from 'react'
import ShopItemFunc from './ShopItemFunc';
import ShopItemClass from './ShopItemClass';


function Task_1() {
  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }
  return (
    <div>
      <div className="container">
        <div className="background-element"></div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItemClass item={item} />
        </div>
      </div>
      <div className="container">
        <div className="background-element"></div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItemFunc item={item} />
        </div>
      </div>
    </div>
  );
}

export default Task_1;