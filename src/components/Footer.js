import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { TbMail } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const [updateExpanded] = useState(false);
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Gabriel Gonta</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} GG</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/gabrielgonta/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/gabriel-gonta-"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/gab._riel.g/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => updateExpanded(false)}
              className="social-icons"
              style={{ marginLeft: "-15px" }}
            >
              <li className="social-icons">
                <a
                  rel="noopener noreferrer"
                  style={{ color: "white" }}
                >
                  <TbMail />
                </a>
              </li>
            </Nav.Link>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
