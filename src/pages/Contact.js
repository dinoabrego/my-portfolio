import React, { Component } from "react";
import { Card, Row, Col } from 'react-bootstrap';
import ContactForm from "../components/ContactForm";


class Contact extends Component {
  render() {
  return (
    <div>
      <Card className="maincard">
       
        <Card.Body>
        <Row>
          <Col sm={4}>
          <Card.Title className="row mx-0 my-2 " > Do you have any question?</Card.Title>
          <Card.Text>
          Please don't hesitate to reach out to me!
          </Card.Text>
          </Col>
          <Col sm={8}>
            <ContactForm/>
          </Col>
          </Row>
        </Card.Body>
      </Card>
      <hr style={{'height':'15px', 'color':'blue',}}/>
    </div>
  );
}
}

export default Contact;
