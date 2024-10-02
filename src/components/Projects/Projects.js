import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="BurgerQuizGame"
              description="This project is an adaptation of the famous French TV game show Burger Quiz, developed with the React library."
              ghLink="https://github.com/gabrielgonta/BurgerQuizGame"
              hours="200"
              technologies={["React",
                "Node.js",
                "CSS", 
                "HTML", 
                "Docker"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MoneyManagerIOS"
              description="This project is a captivating app allows you to track your revenues and expenses with a clean and visually appealing interface."
              ghLink="https://github.com/gabrielgonta/MoneyManagerIOS"
              hours="80"
              technologies={["Swift"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ToDoList"
              description="This project is a task management application, developed using React allowing you to efficiently manage your daily tasks."
              ghLink="https://github.com/gabrielgonta/ToDoList"
              hours="150"
              technologies={["React",
                "Node.js",
                "Firebase",
                "HTML",
                "CSS",
                "API"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Progressive Weather App"
              description="This project is a modern app, sleek weather forecast application built with Vue.js and designed to work seamlessly across devices."
              ghLink="https://github.com/gabrielgonta/WeatherApp.git"
              hours="110"
              technologies={["Vue.js", "Node.js", "HTML", "CSS"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Books Online Market Analysis"
              description="This project is a price-tracking tool designed to help analyze the book market by scraping data from the Books to Scrape website."
              ghLink="https://github.com/gabrielgonta/AnalystBooks"
              hours="70"
              technologies={["Python", "Shell"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Online Flight Ticket Booking"
              description="This project is a web-based platform allows users to easily search for flights, book tickets, and make secure payments online."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              hours="200"
              technologies={["PHP", "HTML", "CSS", "Node.js", "MySQL"]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Autres projets */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="FullStack Project"
              description="This full-stack project combines various technologies to create a complete application that includes front-end, back-end, and database. The project uses Python for backend logic, CSS and HTML for the front-end design, C for low-level operations, PHP and MySQL for handling the database, Angular for the front-end framework, API integration for communication between services, Dockerfile for containerization, and Swift for a mobile app component."
              ghLink="https://github.com/yourgithub/fullstack-project"
              demoLink="https://yourdemo.com"
              hours="300"
              technologies={[
                "Python", 
                "CSS", 
                "HTML", 
                "C", 
                "PHP", 
                "MySQL", 
                "Angular", 
                "API", 
                "Docker", 
                "Swift"
              ]}
            />
          </Col>

          {/* Autres projets */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
