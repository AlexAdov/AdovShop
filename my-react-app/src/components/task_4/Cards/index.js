import React from "react";
import CardItem from "./CardItem";
import { Card, Container, Row, Col } from "react-bootstrap";

export function Cards() {
   const firstCardClick = () => {
      console.log("1 card click");
   };

   const secondCardClick = () => {
      console.log("2 card click");
   };

   const cards = [
      {
         title: "Card title 1",
         text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
         buttonCaption: "Do something 1",
         onButtonClick: firstCardClick,
      },
      {
         title: "Card title 2",
         text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
         buttonCaption: "Do something 2",
         onButtonClick: secondCardClick,
      },
   ];

   return (
      <>
         <div className="bl">
            <Container>
               <Row>
                  <Col md={4}>
                     <CardItem {...cards[0]}>
                        <Card.Img
                           variant="top"
                           src="https://via.placeholder.com/300.png"
                        />
                     </CardItem>
                  </Col>

                  <Col md={4}>
                     <CardItem {...cards[1]} />
                  </Col>
               </Row>
            </Container>
         </div>
      </>
   );
}
