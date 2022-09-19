import React, { useState } from "react";
import { Card, Button, Col, Modal } from "react-bootstrap";
import EditContact from "./EditContact";

const User = (props) => {
  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditContact
            userInfo={props.userInfo}
            userUpdate={props.userUpdate}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>

      <Col md="6">
        <Card
          style={{
            width: "18rem",
            marginBottom: "1rem",
            marginTop: "1.5rem",
            marginLeft: "5rem",
            boxShadow: "0 0 5px black",
          }}
        >
          <Card.Body>
            <Card.Title>
              Contact Informations
            </Card.Title>
            <Card.Text>
              <h6>Name: {props.userInfo.name}</h6>
              <h6>Phone Number: {props.userInfo.phoneNumber}</h6>
              <h6>Location: {props.userInfo.location}</h6>
            </Card.Text>
            <Button
              variant="primary"
              style={{ marginRight: "60px" }}
              onClick={handleShow}
            >
              Edit
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              {" "}
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default User;
