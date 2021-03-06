import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Container} from 'react-bootstrap';
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
        <div>
        <Container fluid>

          <Header/>
          <div className="mt-5">
            <Routes>
              <Route 
                path="https://dinoabrego.github.io/my-portfolio/" 
                element={<AboutMe />}
              />
              <Route 
                path="https://dinoabrego.github.io/my-portfolio/#portfolio" 
                element={<Portfolio />}
              />
              <Route 
                path="https://dinoabrego.github.io/my-portfolio/#contact" 
                element={<Contact />}
              />
               <Route 
                path="https://dinoabrego.github.io/my-portfolio/#resume" 
                element={<Resume />}
              />
            </Routes>
          </div>
          <div className="mt-5">
          <Footer />
          </div>
             
        </Container>
        </div>
      </Router>
  );
}

export default App;
