import React, { Suspense } from 'react';
import {render} from "react-dom"
import Home from '../containers/pages/home';
import Aboutus from './Aboutus';
import logo from '../Static/Img/lu-logo.png';
import profileicon from '../Static/Img/Asset1.png';
import './App.css'
import BlogApp from './Blog';
// import forum from '../containers/pages/forumcomponents/forum';
import PlansList from '../containers/pages/planscomponents/Plans';
// import loginPage from '../containers/pages/logincomponents/login';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import signupPage from '../containers/pages/signupcomponenets/signup';
import { Router, Link } from "@reach/router"
import { Jumbotron, Form, FormControl, NavDropdown, Button, Nav, Container, Navbar, Row, Col} from 'react-bootstrap';



//let us lazily import inventory manager so that it does not slow down startup of page

const App = () => {
  return (
    <Container fluid>
            
     <Container>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand path="/"><img src={logo} alt='company-logo' className='App-logo'/></Navbar.Brand>
      <Navbar className='navbar-text'>
                  Linden Ustawi
                </Navbar>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
       
        <Nav.Item>
          <Link activeClassName='is-active' to='/'></Link>
          <Nav.Link path="/">Home</Nav.Link>
        </Nav.Item>
        
        <Nav.Item>
          <Link activeClassName='is-active' to='/plans'></Link>
          <Nav.Link path="/plans">Plans and Pricings</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Link activeClassName='is-active' to='/blog'></Link>
          <Nav.Link path="/blog">Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Link activeClassName='is-active' to='/Aboutus'></Link>
          <Nav.Link path="/Aboutus">Aboutus</Nav.Link>
        </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
  
    <Router>
            <Home  path="/" component={Home} />
            <BlogApp path="/blog" component={BlogApp} />
            <Aboutus  path="/Aboutus" component={Aboutus} />
            <PlansList path="/plans" component={PlansList} />    
    </Router>
  
    <Container>
      <footer>
        <div  className="footerbt container text-center">© 2020 Copyright:
          <a path="https://lindenustawi.com/"> Linden Ustawi</a>
          </div>
          </footer>
    </Container>
    {/* </Router> */}
    </Container>
    

  );
}



export default App;