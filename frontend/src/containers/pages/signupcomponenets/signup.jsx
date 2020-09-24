
import React from "react";
import './singup.css';
// import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
//import { Container, Row, Button, Col} from 'react-bootstrap';
import logo from '../../../Static/Img/lu-logo.png';

const signupPage = () => {
  return (
      <form class="form-signin text-center">
    <img class="mb-4" src= {logo} alt="" width="142" height="202"/>
    {/* <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1> */}
    <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
 
    <label for="inputEmail" class="sr-only">Repeat Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Repeat Email address" required autofocus/>
      
    <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>

    <label for="psw-repeat" class="sr-only">Repeat Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Repeat Password" required/>
     
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
        <button class="btn btn-lg bg-light border-green btn-block" type="submit">Sign Up</button>
    </div>
</form>
)
}

export default signupPage;


