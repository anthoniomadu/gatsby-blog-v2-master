
import React from "react";
import './login.css';
// import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
// import { Container, Row, Button, Col} from 'react-bootstrap';
import logo from '../../../Static/Img/lu-logo.png';

const loginPage = () => {
return (
    <form class="form-signin text-center">
      <img class="mb-4" src= {logo} alt="" width="142" height="202"/>
      {/* <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1> */}
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </div>
      <button class="btn btn-lg bg-light border-green btn-block" type="submit">Sign in</button>
      <small class=" mb-3 font-weight-normal">Please sign in</small>
    </form>
)
}

export default  loginPage;