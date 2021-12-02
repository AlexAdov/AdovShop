import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

function CardItem(props) {
   const handleButtonClick = (e) => {
      e.preventDefault();
      props.onButtonClick(e.target);
   };

   return (
      <>
         <Card>
         {props.children}
            <Card.Body>
               <Card.Title>{props.title}</Card.Title>
               <Card.Text>{props.text}</Card.Text>
               <Button variant="primary" onClick={handleButtonClick}>
                  {props.buttonCaption}
               </Button>
            </Card.Body>
         </Card>
      </>
   );
}

CardItem.propTypes = {
   title: PropTypes.string.isRequired,
   text: PropTypes.string.isRequired,
   buttonCaption: PropTypes.string.isRequired,
   onButtonClick: PropTypes.func.isRequired,
};

export default CardItem;
