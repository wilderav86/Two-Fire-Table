import React from "react";
import Layout from "../components/Layout";
import Form from "react-bootstrap/Form";
import { Container, Button, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import PageTransition from "../animations/PageTransition";

// todo: add form control for phone number validation

const Contact = () => {
  return (
    <Layout>
      <div className="contact-page-container">
        <PageTransition>
          <h2 className="contact-header">
            Plan your next event with us or inquire about open fire cooking
            classes.
          </h2>

          <div className="contact-content">
            <Container expand="lg" className="form-container">
              <Form
                className="form-element"
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit="submit"
              >
                <input type="hidden" name="form-name" value="contact" />
                <Row>
                  <Col lg={true}>
                    <Form.Group required className="mb-3" controlId="formName">
                      <Form.Control
                        type="name"
                        placeholder="Name"
                        name="name"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={true}>
                    <Form.Group
                      required
                      className="mb-3"
                      controlId="formPhoneNumber"
                    >
                      <Form.Control
                        type="phone"
                        placeholder="Phone Number"
                        name="phone number"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        required
                        type="email"
                        placeholder="Email"
                        name="email"
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col lg={true}>
                    <Form.Group className="mb-3" controlId="formEvent">
                      <Form.Control
                        required
                        as="textarea"
                        type="event"
                        rows="3"
                        name="event-info"
                      />
                      <Form.Text className="text-muted">
                        Tell us about your event
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col />
                  <Col>
                    <div className="contact-form-button">
                      <Button
                        as={motion.button}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        size="lg"
                        variant="custom"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                  </Col>
                  <Col />
                </Row>
              </Form>
            </Container>

            <Container expand="md" className="contact-us-container">
              <h3>CONTACT US</h3>
              <h5>Email</h5>
              <p>Twofiretable@gmail.com</p>
              <h5>Phone</h5>
              <p>(###) ###-####</p>
            </Container>
          </div>
        </PageTransition>
      </div>
    </Layout>
  );
};

export default Contact;
