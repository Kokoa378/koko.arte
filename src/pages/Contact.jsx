import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider";

const Contact = () => {
  return <Helmet title="Contactos" >
          <section>
            <Container>
            <TestimonialSlider />
            </Container>
          </section>
      </Helmet>
         
};

export default Contact;
