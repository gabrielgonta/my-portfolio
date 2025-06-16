import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Gabriel Gonta</span> from <span className="purple">Nice, France</span>.
            <br />
            <br />
            I'm currently pursuing a degree in <b>Cybersecurity</b> at <b>CyberUniversity</b>, where I deepen my skills in system security, network protection, and ethical hacking.
            <br />
            <br />
            I'm also the founder and CEO of <a className="purple" target="_blank" rel="noreferrer" href="https://skaneat.com">SkanEat</a>, a web application designed to modernize the customer experience in restaurants, bars, and cafés.
            <br />
            <br />
            Outside of development, I have a deep passion for creative and immersive activities that keep me inspired:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing music – guitar & drums
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming and game design exploration
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music and discovering new artists
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and exploring new cultures
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
