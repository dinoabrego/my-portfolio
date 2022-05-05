import React, { Component } from "react";
import { Card, Row, Col } from 'react-bootstrap';
import imageAbout from "../assets/about-me.jpeg";


class AboutMe extends Component {
  render() {
  return (
    <div>
      <Card>
        <Card.Header>ABOUT ME</Card.Header>
        <Card.Body>
        <Row>
          <Col sm={9}>
          <Card.Title>Hello! I'm Dino. I'm an architect from México and I'm currently enrolled in a full stack web development bootcamp.</Card.Title>
          <Card.Text>
          I really enjoy all the different aspects of my career but I have been looking for a new path that can challenge me to grow. When I was 10 I started modifying the html of my MySpace and then continued on Tumblr. I also did my friend's pages and it was very fun to play around with all the possibilities. I went on to study a completey different career but I always wanted to properly learn to code so here I am.
          </Card.Text>
          </Col>
          <Col sm={3}>
            <Card.Img variant="top" src={imageAbout} />
          </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
}

export default AboutMe;
