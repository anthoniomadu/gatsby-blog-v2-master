
import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { Container, Row, Button, Col} from 'react-bootstrap';

const signupPage = () => {
return (
<Container>
  <Row>
    <Col md="6">
      <form>
        <p className="h5 text-center mb-4">Sign up</p>
        <div className="grey-text">
          <input label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <input label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <input label="Confirm your email" icon="exclamation-triangle" group type="text" validate
            error="wrong" success="right" />
          <input label="Your password" icon="lock" group type="password" validate />
        </div>
        <div className="text-center">
          <Button color="primary">Register</Button>
        </div>
      </form>
    </Col>
  </Row>
</Container>
);
};

export default  signupPage;