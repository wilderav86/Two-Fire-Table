import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { motion } from "framer-motion";
import addToMailchimp from "gatsby-plugin-mailchimp";

const NewsLetterForm = () => {
  const [userEmail, setUserEmail] = useState("");
  const [submissionResult, setSubmissionResult] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const newsLetterHeader = "SUBSCRIBE TO OUR NEWSLETTER";

  const handleSubmit = (e) => {
    e.preventDefault();

    addToMailchimp(userEmail)
      .then((data) => {
        setSubmissionResult(data);
        setShowModal(true);
      })
      .catch((error) => {
        console.log(error);
        // Errors in here are client side
        // Mailchimp always returns a 200
      });
  };

  const handleChangeEmail = (e) => {
    setUserEmail(e.target.value);
  };

  return (
    <>
      <div className="newsletter-container">
        <h2 className="newsletter-header">{newsLetterHeader}</h2>
        <Form onSubmit={handleSubmit}>
          <div className="enter-email-container">
            <Form.Group required controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={userEmail}
                onChange={handleChangeEmail}
              />
            </Form.Group>
            <Button
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              variant="custom"
            >
              Join
            </Button>
          </div>
        </Form>
      </div>
      {submissionResult && (
        <div>
          <Modal show={showModal} centered>
            <Modal.Body className="newsletter-modal">
              <div
                className="modal-message"
                dangerouslySetInnerHTML={{ __html: submissionResult.msg }}
              ></div>
              <Button variant="custom" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
};

export default NewsLetterForm;
