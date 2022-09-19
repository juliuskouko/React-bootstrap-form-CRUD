import React from "react";
import { Container, Row } from "react-bootstrap";
import User from "./Contact";

function Users(props) {
  return (
    <Container>
      <Row>
        {props.userAdd.map((item) => {
          return (
            <User
              userInfo={item}
              key={item.id}
              deleteUser={props.deleteUser}
              userUpdate={props.userUpdate}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default Users;
