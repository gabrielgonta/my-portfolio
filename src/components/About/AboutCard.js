import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gabriel Gonta </span>
            from <span className="purple"> Nice, France.</span>
            <br />
            I am currently student in cybersecurity at CyberUniversity.
            <br />
            I am also CEO of <a className="purple" target="_blank" rel="noreferrer" href="https://skaneat.com">SkanEat</a>. The web application for restaurant, bars, bistros...
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Musics (Guitar, Drums)
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listen to Musics
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "After the storm always comes the sun"{" "}
          </p>
          <footer className="blockquote-footer">Gabriel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
