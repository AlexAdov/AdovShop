import React from "react";
import CardItem from "./CardItem";
import { Card, Container, Row, Col } from "react-bootstrap";




export function Cards() {


  const firstCardClick = (obj) => {
    console.log('1 card click');
  };

  const secondCardClick = (obj) => {
    console.log('2 card click');
  }

  const cards = [{
    title: 'Card title 1',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    buttonCaption: 'Do something',
    image: 'https://via.placeholder.com/300.png',
    onButtonClick: firstCardClick
  },
  {
    title: 'Card title 2',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    buttonCaption: 'Do something',
    onButtonClick: secondCardClick
  }];

  return (
    <>
      <div className="bl">
        <Container>
          <Row>
            <Col md={4}>
              <Card>
                <CardItem {...cards[0]} >
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    <p>Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>
                  </Card.Text>
                </CardItem>
              </Card>
            </Col>


            <Col md={4}>
              <Card>
                <CardItem>
                  <Card.Title>Card title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card subtitle</Card.Subtitle>
                  <Card.Text>
                    <p>Some quick example text to build on the card title and make up the
                      bulk of the card's content.</p>
                  </Card.Text>
                </CardItem>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>
    </>
  );
}

