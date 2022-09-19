import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class EditContact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.userInfo.name,
      phoneNumber: this.props.userInfo.phoneNumber,
      location: this.props.userInfo.location,
      id: this.props.userInfo.id,
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.userUpdate(this.state.id, this.state);
    this.setState({
      name: "",
      phoneNumber: "",
      location: "",
    });
    this.props.closeModal()
  };

  render() {
    return (
      <div>
        <Form
          onSubmit={this.handleSubmit}
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

export default EditContact;
