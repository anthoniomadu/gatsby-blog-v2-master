import React from 'react';
import { Router } from "@reach/router";
import {Link} from "gatsby";
import { Container, Nav, Navbar} from 'react-bootstrap';
// import { render } from 'react-dom';
import Home from '../pages/home';
import Aboutus from '../pages/aboutus';
import logo from '../Static/Img/lu-logo.png';
// import profileicon from '../Static/Img/Asset1.png';
import '../pages/App.css'
import BlogApp from '../pages/blog';
import PlansList from '../pages/plans';



const Navigation = () => {
    return( 
      <Container>      
          <Navbar bg="light" expand="lg">
          <Navbar.Brand path="/"><img src={logo} alt='company-logo' className='App-logo'/></Navbar.Brand>
          <Navbar className='navbar-text'>
                      Linden Ustawi
                    </Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" as="ul">
           
            <Nav.Item as="li">
              <Link className="nav-link" activeClassName='is-active' to='/'>Home</Link> {Home}
            </Nav.Item>
            
            <Nav.Item as="li">
              <Link className="nav-link" activeClassName='is-active' to='/plans'> Plans and Pricings</Link> {PlansList}
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="nav-link" activeClassName='is-active' to='/blog'> Blog</Link> {BlogApp}
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="nav-link" activeClassName='is-active' to='/aboutus'> Aboutus</Link> {Aboutus}
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
   ) 
}


export default Navigation;