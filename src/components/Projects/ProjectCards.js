import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { TbApi } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import { FaReact, FaNodeJs, FaPython, FaCss3Alt, FaHtml5, FaPhp, FaDocker, FaSwift, FaVuejs } from "react-icons/fa";
import { SiC, SiMysql, SiCplusplus, SiVite, SiAngular, SiFirebase, SiShell, SiTailwindcss, SiCypress, SiKalilinux, SiTypescript, SiSocketdotio } from "react-icons/si"; // Import additional icons

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        {/* Button to display the number of hours spent on the project */}
        <Button
          variant="primary"
          href={props.demoLink}
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          <FaClock /> &nbsp; {props.hours} Hours
        </Button>

        {/* Display icons for used technologies */}
        <div style={{ marginTop: "10px" }}>
          {props.technologies.includes("React") && (
            <FaReact style={{ marginRight: "10px", color: "#61DBFB" }} size={30} />
          )}
          {props.technologies.includes("Node.js") && (
            <FaNodeJs style={{ marginRight: "10px", color: "#68A063" }} size={30} />
          )}
          {props.technologies.includes("Vue.js") && (
            <FaVuejs style={{ marginRight: "10px", color: "#42b883" }} size={30} />
          )}
          {props.technologies.includes("Cypress") && (
            <SiCypress style={{ marginRight: "10px", color: "#42b883" }} size={30} />
          )}
          {props.technologies.includes("Python") && (
            <FaPython style={{ marginRight: "10px", color: "#306998" }} size={30} />
          )}
          {props.technologies.includes("HTML") && (
            <FaHtml5 style={{ marginRight: "10px", color: "#E34C26" }} size={30} />
          )}
          {props.technologies.includes("CSS") && (
            <FaCss3Alt style={{ marginRight: "10px", color: "#264de4" }} size={30} />
          )}
          {props.technologies.includes("Tailwindcss") && (
            <SiTailwindcss style={{ marginRight: "10px", color: "#264de2" }} size={30} />
          )}
          {props.technologies.includes("C") && (
            <SiC style={{ marginRight: "10px", color: "#A8B9CC" }} size={30} />
          )}
          {props.technologies.includes("Cplusplus") && (
            <SiCplusplus style={{ marginRight: "10px", color: "#A9B9CC" }} size={30} />
          )}
          {props.technologies.includes("Firebase") && (
            <SiFirebase style={{ marginRight: "10px", color: "#FFCA28" }} size={30} />
          )}
          {props.technologies.includes("PHP") && (
            <FaPhp style={{ marginRight: "10px", color: "#8993be" }} size={30} />
          )}
          {props.technologies.includes("MySQL") && (
            <SiMysql style={{ marginRight: "10px", color: "#4479A1" }} size={30} />
          )}
          {props.technologies.includes("Vite") && (
            <SiVite style={{ marginRight: "10px", color: "#ac4ae0" }} size={30} />
          )}
          {props.technologies.includes("Angular") && (
            <SiAngular style={{ marginRight: "10px", color: "#DD0031" }} size={30} />
          )}
          {props.technologies.includes("Shell") && (
            <SiShell style={{ marginRight: "10px", color: "#6ae645" }} size={30} />
          )}
          {props.technologies.includes("API") && (
            <TbApi style={{ marginRight: "10px", color: "#61DBFB" }} size={30} />
          )}
          {props.technologies.includes("Docker") && (
            <FaDocker style={{ marginRight: "10px", color: "#0db7ed" }} size={30} />
          )}
          {props.technologies.includes("Swift") && (
            <FaSwift style={{ marginRight: "10px", color: "#FA7343" }} size={30} />
          )}
          {props.technologies.includes("Kali") && (
            <SiKalilinux style={{ marginRight: "10px", color: "#0D8CBC" }} size={30} />
          )}
          {props.technologies.includes("Typescript") && (
            <SiTypescript style={{ marginRight: "10px", color: "#1bace3" }} size={30} />
          )}
          {props.technologies.includes("Socket") && (
            <SiSocketdotio style={{ marginRight: "10px", color: "#FFFFFF" }} size={30} />
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
