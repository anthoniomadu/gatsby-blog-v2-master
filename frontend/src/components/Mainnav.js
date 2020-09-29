import React from 'react';
import { Router } from "@reach/router";
import {Link} from "gatsby";
import { Container, Nav, Navbar} from 'react-bootstrap';
// import { render } from 'react-dom';
import Home from '../pages/home';
import Aboutus from '../pages/aboutus';
import logo from '../Static/Img/lu-logo-slant.png';
// import profileicon from '../Static/Img/Asset1.png';
import '../pages/App.css'
import BlogApp from '../pages/blog';
import PlansList from '../pages/plans';



const Navigation = () => {
    return( 
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
   ) 
}


export default Navigation;