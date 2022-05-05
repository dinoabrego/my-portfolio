import React from 'react';
import ResumePdf from '../assets/resume.pdf' 
import { Card, Row, Col} from 'react-bootstrap';

const Resume = () => {
    return (
      <div>
      <Card className="maincard">

      <Card.Body>
        <Row>
          <Col sm={2}>
          <p id="resume-download">You can download my resume <span><a id="resume-link" href={ResumePdf} download>here</a></span></p>
          </Col>
          <Col sm={10}>
          <Card.Title className="row mx-0 my-2 " > Skills: </Card.Title>
          <Card.Text>
          HTML • CSS • JavaScript • Web APIs • Third Party APIs • Server Side APIs •
          NodeJS • Object-Oriented Programming • Express • SQL • React JS •
          MongoDB 
          </Card.Text>
          </Col>
          </Row>
        </Card.Body>
        </Card>
        <hr style={{'height':'15px', 'color':'green',}}/>
        </div>
    );
}

export default Resume;