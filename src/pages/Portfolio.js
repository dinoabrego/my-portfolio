import React, { Component } from "react";
import { Card, CardGroup } from 'react-bootstrap';
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";


class Portfolio extends Component {
  render() {
  return (
    <div>
      <Card className="maincard">
  
        <CardGroup>
          <Card className="cardproject">
            <Card.Img variant="top" src={project1} />
            <Card.Body>
              <Card.Text>
              <a href="https://josevidmal.github.io/u7-project1-team4/">Deployed Application</a>
              <br/>
              <a href="https://github.com/josevidmal/u7-project1-team4">Repository</a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardproject">
            <Card.Img variant="top" src={project2} />
            <Card.Body>
              <Card.Text>
              <a href="https://dinoabrego.github.io/weather-dashboard/">Deployed Application</a>
              <br/>
              <a href="https://github.com/dinoabrego/weather-dashboard">Repository</a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardproject">
            <Card.Img variant="top" src={project3} />
            <Card.Body>
              <Card.Text>
              <a href="https://dinoabrego.github.io/day-scheduler/">Deployed Application</a>
              <br/>
              <a href="https://github.com/dinoabrego/day-scheduler">Repository</a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardproject">
            <Card.Img variant="top" src={project4} />
            <Card.Body>
              <Card.Text>
              <a href="https://limitless-plateau-15055.herokuapp.com/">Deployed Application</a>
              <br/>
              <a href="https://github.com/AndreV96/Whistle">Repository</a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardproject">
            <Card.Img variant="top" src={project5} />
            <Card.Body>
              <Card.Text>
              <a href="https://dinoabrego.github.io/code-quiz/">Deployed Application</a>
              <br/>
              <a href="https://github.com/dinoabrego/code-quiz">Repository</a>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="cardproject">
            <Card.Img variant="top" src={project6} />
            <Card.Body>
              <Card.Text>
              <a href="https://dinoabrego.github.io/password-generator">Deployed Application</a>
              <br/>
              <a href="https://github.com/dinoabrego/password-generator">Repository</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Card>
      <hr style={{'height':'15px', 'color':'yellow',}}/>
    </div>
  );
}
}

export default Portfolio;
