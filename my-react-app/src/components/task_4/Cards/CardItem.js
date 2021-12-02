import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from "react-bootstrap";



function CardItem({ image, children, title }) {

  const handleButtonClick = (evt) => {
    evt.preventDefault();
    console.log(evt.children)
  }

  

  return (

<>
    { image && <Card.Img variant="top" src={image} />}
          <Card.Body>
            {title}
            <Card.Text>
             {children}
            </Card.Text>
        <Button variant="primary" onClick={handleButtonClick}>Go somewhere</Button>
          </Card.Body>



</>
    
  );
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonCaption: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired
}

export default CardItem;