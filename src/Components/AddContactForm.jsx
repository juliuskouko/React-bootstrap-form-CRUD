import React, { Component } from 'react'
import {Form, Button} from "react-bootstrap"


class AddContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phoneNumber: "",
      location: "",
      id: ""
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addPerson(this.state)
    this.setState({
      name: "",
      phoneNumber: "",
      location: "",
    });
  }

  render() {
    return (
      <div>
        <Form
          onSubmit={this.handleSubmit}
          style={{
            border: "2px solid grey",
            padding: "4rem",
            borderRadius: "10px",
            boxShadow: "0 0 3px black",
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h6>Name</h6>
            <Form.Control
              type="text"
              placeholder="Enter your fullname"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h6>Phone Number</h6>
            <Form.Control
              type="text"
              placeholder="Enter your Phone Number"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <h6>Location</h6>
            <Form.Control
              type="text"
              placeholder="Enter your Location"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddContactForm