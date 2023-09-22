import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function RegisterForm()
{

  const [show, setShow] = useState(false);
  const handleShow = (bShow) =>
  {
    setShow(bShow);
  };
  return (
    <>
      <Button
        shape="round"
        size={"large"}
        variant="primary"
        onClick={() => handleShow(true)}
        className="transition-transform duration-300 ease-in-out transform hover:scale-110 font-bold text-base h-10 text-white"
        style={{
          backgroundColor: "black",
          color: "white",
          width: 100,
          margin: 5,
        }}
      >
        Signup
      </Button>
      <Modal
        show={show}
        onHide={() =>
        {
          handleShow(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create new account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>What's your email?</Form.Label>
              <Form.Control type="text" placeholder="Enter your email" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Create a password</Form.Label>
              <Form.Control type="password" placeholder="Create a password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>What should we call you?</Form.Label>
              <Form.Control type="text" placeholder="Enter a profile name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>

            <div class="d-flex justify-content-end">
              <Button variant="primary" type="submit" style={{ color: "black" }}>
                Sign up
              </Button>
            </div>
          </Form>
        </Modal.Body>

      </Modal>
    </>
  );
}
