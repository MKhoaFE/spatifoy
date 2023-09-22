import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default function LoginForm() {
  const [show, setShow] = useState(false);
  const handleShow = (bShow) => {
    setShow(bShow);
  };

  return (
    <>
      <Button
        shape="round"
        size={"large"}
        variant="success"
        onClick={() => handleShow(true)}
        className="transition-transform duration-300 ease-in-out transform hover:scale-110 font-bold text-base h-10 bg-white text-neutral-600"
        style={{
          backgroundColor: "white",
          color: "black",
          width: 100,
          margin: 5,
        }}
      >
        Login
      </Button>
      <Modal
        show={show}
        onHide={() => {
          handleShow(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{color:"black"}}>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>

            <div class="d-flex justify-content-end">
              <Button variant="primary" type="submit" style={{color:"black"}}>
                Login
              </Button>
            </div>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={()=>{setIsShow(false)}}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{setIsShow(false)}}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
