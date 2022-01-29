import React from "react";
import { ContactUs } from "../components/ContactUs";
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <div>
      <Container className="contact_callout">
        <h3>Contact Me</h3>
        <h5>
          Please reach out to me with any inqueries and I will respond within 1
          to 2 days!
        </h5>
      </Container>
      <ContactUs />
    </div>
  );
}

export default Contact;
