import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate <b className="purple">Fullstack Developer</b> with a strong interest in
              <b className="purple"> web technologies</b> and <b className="purple">
                <a className="purple" href="https://fr.wikipedia.org/wiki/Cybersécurité" target="_blank" rel="noreferrer">
                  cybersecurity
                </a>
              </b>.
              I love building modern, secure, and user-friendly applications that solve real-world problems.
              <br />
              <br />
              I’m fluent in technologies such as&nbsp;
              <i>
                <b className="purple">
                  <a className="purple" href="https://fr.wikipedia.org/wiki/Programmation_web" target="_blank" rel="noreferrer">HTML/CSS</a>, 
                  <a className="purple" href="https://fr.wikipedia.org/wiki/JavaScript" target="_blank" rel="noreferrer"> JavaScript</a>, 
                  <a className="purple" href="https://fr.wikipedia.org/wiki/React" target="_blank" rel="noreferrer"> React</a>, 
                  <a className="purple" href="https://fr.wikipedia.org/wiki/Node.js" target="_blank" rel="noreferrer"> Node.js</a>, 
                  and <a className="purple" href="https://fr.wikipedia.org/wiki/SQL" target="_blank" rel="noreferrer">SQL</a>.
                </b>
              </i>
              <br />
              <br />
              I also enjoy coding in systems and scripting languages like&nbsp;
              <i>
                <b className="purple">
                  <a className="purple" href="https://fr.wikipedia.org/wiki/C_(langage)" target="_blank" rel="noreferrer">C</a>, 
                  <a className="purple" href="https://fr.wikipedia.org/wiki/Python_(langage)" target="_blank" rel="noreferrer"> Python</a>, 
                  <a className="purple" href="https://fr.wikipedia.org/wiki/Go_(langage)" target="_blank" rel="noreferrer"> Go</a>, 
                  <a className="purple" href="https://fr.wikipedia.org/wiki/Swift_(langage_d%27Apple)" target="_blank" rel="noreferrer"> Swift</a>, 
                  and <a className="purple" href="https://fr.wikipedia.org/wiki/Langage_de_requête" target="_blank" rel="noreferrer">Dataquery</a>.
                </b>
              </i>
              <br />
              <br />
              My main focus is on constantly learning new tools and languages, while improving my
              <i>
                <b className="purple">
                  <a className="purple" href="https://fr.wikipedia.org/wiki/Cybersécurité" target="_blank" rel="noreferrer"> cybersecurity</a>
                </b>
              </i>
              &nbsp;skills and staying up to date with tech industry standards.
              <br />
              <br />
              Whenever possible, I dedicate my time to building new projects and MVPs using
              <i>
                <b className="purple"> modern web frameworks </b>
              </i>
              like&nbsp;
              <i>
                <b className="purple">
                  <a className="purple" href="https://fr.wikipedia.org/wiki/React" target="_blank" rel="noreferrer">React.js</a>, 
                  <a className="purple" href="https://en.wikipedia.org/wiki/Vue.js" target="_blank" rel="noreferrer"> Vue.js</a>, 
                  and <a className="purple" href="https://fr.wikipedia.org/wiki/Angular" target="_blank" rel="noreferrer">Angular</a>.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/gabrielgonta"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gabriel-gonta-"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/gab._riel.g/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
