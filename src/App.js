import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import AllContact from "./Components/AllContact";
import AddContactForm from "./Components/AddContactForm";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [
        {
          name: "Julius Kouko",
          phoneNumber: "+233 554 051 957",
          location: "North Legon",
          id: "beautiful",
        },
        {
          name: "Seth Kadeh",
          phoneNumber: "+233 506 399 431",
          location: "Tema",
          id: "awesome",
        },
      ],
    };
  }

  addNewUser = (person) => {
    person.id = Math.random().toString();
    this.setState({
      user: [...this.state.user, person],
    });
  };

  deleteUser = (id) => {
    let notDeletedUsers = this.state.user.filter((item) => item.id !== id);
    this.setState({
      user: notDeletedUsers,
    });
  };

  updateUser = (id, newUser) => {
    this.setState({
      user: this.state.user.map((item) => {
        if (item.id === id) {
          return newUser
        }

      return item
      }),
    }
    );
  };

  render() {
    return (
      <div>
        <Container style={{ marginTop: "4rem" }}>
          <Row>
            <Col md="4">
              <AddContactForm addPerson={this.addNewUser} />
            </Col>
            <Col>
              <AllContact userAdd={this.state.user} deleteUser={this.deleteUser} userUpdate={this.updateUser} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
