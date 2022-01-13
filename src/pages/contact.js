import React from "react";
import Layout from "../components/Layout";
import Form from "react-bootstrap/Form";
import { Container, Button } from "react-bootstrap";

// todo: add form control for phone number validation

const Contact = () => {
  return (
    <Layout>
      <Container className="contact-container">
        <h2 className="contact-header">
          Plan your next event with us or inquire about open fire cooking
          classes.
        </h2>
        <Form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact" />
          <Form.Group required className="mb-3" controlId="formName">
            <Form.Control type="name" placeholder="Name" name="name" />
          </Form.Group>
          <Form.Group required className="mb-3" controlId="formPhoneNumber">
            <Form.Control
              type="phone"
              placeholder="Phone Number"
              name="phone number"
            />
          </Form.Group>
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
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </Layout>
  );
};

export default Contact;
