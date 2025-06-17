import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7x979ov",       // Ton ID EmailJS
        "template_m41sgho",      // Ton Template ID
        e.target,
        "fVcg_Y7ZzNliC3pTv"      // Ton Public Key
      )
      .then(
        () => {
          setStatus("Message envoyé avec succès !");
          form.current.reset();
        },
        () => {
          setStatus("Erreur lors de l'envoi du message. Veuillez réessayer.");
        }
      );
  };

  return (
    <Container fluid className="contact-section-wrapper">
      <Container className="contact-container">
        <h2 className="contact-title">Contactez-moi</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Nom"
            required
            className="contact-input"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
            className="contact-input"
          />
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            required
            className="contact-input"
          />
          <textarea
            name="message"
            placeholder="Votre message"
            required
            className="contact-textarea"
          />
          <button type="submit" className="contact-button">
            Envoyer
          </button>
          {status && <p className="contact-status">{status}</p>}
        </form>
      </Container>
      <Particle />
    </Container>
  );
}

export default Contact;
