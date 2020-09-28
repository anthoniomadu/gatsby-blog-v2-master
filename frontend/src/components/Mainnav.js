import React from 'react';
import { Router, Link } from "@reach/router"
import { Container, Nav, Navbar} from 'react-bootstrap';
import { render } from 'react-dom';
import Home from '../pages/home';
import Aboutus from '../pages/Aboutus';
import logo from '../Static/Img/lu-logo.png';
// import profileicon from '../Static/Img/Asset1.png';
import '../pages/App.css'
import BlogApp from '../pages/Blog';
import PlansList from '../pages/Plans';



const Navigation = ({ children }) => {
    return( 
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
              <Link activeClassName='is-active' to='/'>Home</Link> {Home}
            </Nav.Item>
            
            <Nav.Item>
              <Link activeClassName='is-active' to='/plans'> Plans and Pricings</Link> {PlansList}
            </Nav.Item>
            <Nav.Item>
              <Link activeClassName='is-active' to='/blog'> Blog</Link> {BlogApp}
            </Nav.Item>
            <Nav.Item>
              <Link activeClassName='is-active' to='/Aboutus'> Aboutus</Link> {Aboutus}
            </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar> 
        
  
          <Router>     
            <Home  path="/" />
            <BlogApp path="/blog"  />
            <Aboutus  path="/Aboutus"  />
            <PlansList path="/plans" />    
          </Router>
          
        
        </Container>
   ) 
}


export default Navigation;