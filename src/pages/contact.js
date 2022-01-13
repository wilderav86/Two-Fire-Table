import React from "react";
import Layout from "../components/Layout";
import Form from "react-bootstrap/Form";
import { Container, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Layout>
      <Container className="contact-container">
        <Form name="contact" method="post" data-netlfy="true" onSubmit="submit">
          <input type="hidden" name="form-name" value="contact" />
          <Form.Group required className="mb-3" controlId="formName">
            <Form.Control type="name" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control required type="email" placeholder="Email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEvent">
            <Form.Control required as="textarea" type="event" rows="3" />
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
