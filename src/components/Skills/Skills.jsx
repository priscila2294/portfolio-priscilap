import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Skills = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Skills" />
        <Row>
          <Col md={4} sm={12}>
          <div class="icon"><i class="fa fa-desktop fa-5x"></i></div>
                <h2>
                  <b>Front-End</b>
                </h2>
                <br />
                Javascript
                <br />
                React
                <br />
                Bootstrap/Reactstrap
                <br />
                HTML
                <br />
                CSS/SCSS
                <br />
          </Col>
          <Col md={4} sm={12}>
             <div class="icon"><i class="fa fa-gear fa-spin fa-lg fa-5x"></i></div>
                <h2>
                  <b>Back-End</b>
                </h2>
                <br />
                PostgresQL
                <br />
                Active Record
                <br />
                Rails
                <br />
                Ruby
                <br />

          </Col>
          <Col md={4} sm={12}>
          <div class="icon1" ><i class="fa fa-github fa-lg fa-5x"></i></div>
          

                <h2>
                <b>Testing & Version Control</b>
                </h2>
                <br />
                Jest
                <br />
                Rspec
                <br />
                Git
                <br />

          </Col>
        </Row>
       
        <Row className="skills-wrapper">
        
          
        </Row>
        
      </Container>
    </section>
  );
};

export default Skills;