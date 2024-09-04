import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
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
              I fell in love with programming and cybersecurity and now I try to
              practice as much as possible !
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> <a className="purple" href="https://fr.wikipedia.org/wiki/C_(langage)" target="_blank" rel="noreferrer">C</a>, <a className="purple" href="https://fr.wikipedia.org/wiki/Python_(langage)" target="_blank" rel="noreferrer">Python</a> and <a className="purple" href="https://fr.wikipedia.org/wiki/Programmation_web" target="_blank" rel="noreferrer">web language</a>. </b>
              </i>
              <br />
              <br />But I can code always in 
              <i>
                <b className="purple"> <a className="purple" href="https://fr.wikipedia.org/wiki/Langage_de_requête" target="_blank" rel="noreferrer">Dataquery language</a>, <a className="purple" href="https://fr.wikipedia.org/wiki/Swift_(langage_d%27Apple)" target="_blank" rel="noreferrer">Swift</a> and <a className="purple" href="https://fr.wikipedia.org/wiki/Go_(langage)" target="_blank" rel="noreferrer">Go</a>. </b>
              </i>
              <br />
              <br />
              My field of interest's are learn new&nbsp;
              <i>
                <b className="purple">programming languages </b> and
                  also improve my{" "}
                <b className="purple">
                  <a className="purple" href="https://fr.wikipedia.org/wiki/Cybersécurité" target="_blank" rel="noreferrer"> cybersecurity</a>
                </b>
                &nbsp;skills
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing new web applicatons
              with <i><b className="purple"><a className="purple" href="https://fr.wikipedia.org/wiki/Node.js" target="_blank" rel="noreferrer">Node.js</a></b></i> and like
              <i>
                <b className="purple"> <a className="purple" href="https://fr.wikipedia.org/wiki/React" target="_blank" rel="noreferrer">React.js</a> and <a className="purple" href="https://fr.wikipedia.org/wiki/Angular" target="_blank" rel="noreferrer">Angular</a> </b>
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
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
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
