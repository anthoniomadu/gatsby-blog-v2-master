import React from 'react';
// import {Link, Router, Route} from 'react-router'
import { Router } from "@reach/router";
import {Link} from "gatsby";
import { Container, Nav, Navbar, Col} from 'react-bootstrap';
import Aboutus from './Aboutus';
import logo from '../Static/Img/lu-logo.png';
// import profileicon from '../Static/Img/Asset1.png';
import './App.css'
import BlogApp from './Blog';
// import forum from '../containers/pages/forumcomponents/forum';
import PlansList from './Plans';
// import loginPage from '../containers/pages/logincomponents/login';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import signupPage from '../containers/pages/signupcomponenets/signup';

// import Navigation from "../components/mainnav"
import Home from './home';


const App = () => {
  return (
    <Container fluid>
        <Container>  
        <Navbar className= "Navline" expand="lg"> </Navbar> 
        <Container className="align-center ml-auto mr-auto">
        
         </Container> 
         <Navbar  expand="lg">
          <Navbar.Brand path="/"><Link  activeClassName='is-active' to='/'><img src={logo} alt='company-logo' className='App-logo'/></Link></Navbar.Brand>
         
         
          <Nav className="mr-auto" as="ul">
          <Nav.Item>
          <img className="yogapose2" src="https://res.cloudinary.com/deya21gvu/image/upload/v1601049110/LU%20pics/APNG/lutea2_rlvgqd.png" alt="Peace"></img>
          </Nav.Item>
          </Nav>



          <Navbar className='Navitext'>
          <Link className='Navitext' activeClassName='is-active' to='/'>
             Linden Ustawi</Link>
                    </Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="success">
            <Nav className="ml-auto" as="ul">
           
            <Nav.Item as="li">
              <Link className="nav-link" activeClassName='is-active' to='/'>Home</Link>
            </Nav.Item>
            
            <Nav.Item as="li">
              <Link className="nav-link" activeClassName='is-active' to='/plans'> Plans and Pricings</Link> 
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="nav-link" activeClassName='is-active' to='/blog'> Blog</Link> 
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="nav-link" activeClassName='is-active' to='/aboutus'> Aboutus</Link> 
            </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar> 
        
          <Router>     
            <Home  path="/" Components={Home} />
            <BlogApp path="/blog" Components= {PlansList}/>
            <Aboutus  path="/aboutus" Components= {BlogApp}/>
            <PlansList path="/plans" Components= {Aboutus}/>    
          </Router>
        
      </Container>
        <Col></Col>
        <br/>
        <Container>
            <footer>
            <div  className="footerbt text-center">© 2020 Copyright:
              <a path="https://lindenustawi.com/"> Linden Ustawi</a>
              </div>
            </footer>
        </Container>
    </Container>

  );
}


export default App;