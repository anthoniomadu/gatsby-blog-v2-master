import React, {Suspense} from 'react';
// import {Link, Router, Route} from 'react-router'
// import { Router } from "@reach/router";
// import {Link} from "gatsby";
import {Jumbotron, Row, Container, Nav, Navbar, Col} from 'react-bootstrap';
import Aboutus from './aboutus';
import logo from '../Static/Img/lu-logo-slant.png';
// import profileicon from '../Static/Img/Asset1.png';
import './App.css'
import BlogApp from './blog';
// import forum from '../containers/pages/forumcomponents/forum';
import PlansList from './plans';
// import loginPage from '../containers/pages/logincomponents/login';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import signupPage from '../containers/pages/signupcomponenets/signup';
// import Navigation from "../components/mainnav"
import Home from './home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom" 



const App = () => {
  return (


    <Container> {/**Topmost container set to fluid to get from end to end of page */}
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
            
                <Container>{/**We are putting all inside Navbar container so as to center it on parent fluid */}
                {/** The above makes the menu toggle responsively. Notice the reference to the id of Navbar.Collapse below */}
                  <Navbar className="Navline" expand="lg">
                    
                          {/* <Nav className="mr-auto" as="ul">

                            <NavLink activeClassName='is-active' to='/'>
                              <Nav.Item>
                                <Nav.Link href=''><img src={profileicon} alt='profileicon' className='profileicon'/></Nav.Link>
                              </Nav.Item>
                            </NavLink> 
                          
                          </Nav> */}
                    
                  </Navbar>        
                </Container>

                <Navbar expand="lg">
                  <Container>{/**We are putting all inside Navbar container so as to center it on parent fluid */}

                      <Nav className="" as="ul">
                            <Nav.Item>
                              <img 
                                className="yogapose2 ml-auto mr-auto" 
                                src="https://res.cloudinary.com/deya21gvu/image/upload/v1601049110/LU%20pics/APNG/lutea2_rlvgqd.png" 
                                alt="Peace">
                              </img>
                            </Nav.Item>
                      </Nav>

                      <Navbar.Brand href="/">
                        <img 
                          src={logo} 
                          alt='company-logo' 
                          className='App-logo'/>
                      </Navbar.Brand>

                      <NavLink activeClassName='is-active' to='/' >
                        <Navbar  href="/" className='Navitext'>
                          Linden Ustawi
                        </Navbar>
                      </NavLink>

                      <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                      {/** The above makes the menu toggle responsively. Notice the reference to the id of Navbar.Collapse below */}
                      <Navbar.Collapse id="basic-navbar-nav" > 
                      
                        <Nav className="ml-auto" expand-lg>

                          <NavLink activeClassName='is-active' to='/' >
                            <Nav.Item as="li">
                              <Nav.Link href='/'>Home</Nav.Link>
                            </Nav.Item>
                          </NavLink>

                          <NavLink activeClassName='is-active' to='/plans'>
                            <Nav.Item as="li">
                              <Nav.Link href='/plans'>Plans and Pricings</Nav.Link>
                            </Nav.Item>
                          </NavLink>

                          <NavLink activeClassName='is-active' to='/blog'>
                            <Nav.Item as="li">
                              <Nav.Link href='/blog'>Blog</Nav.Link>
                            </Nav.Item>
                          </NavLink>

                          <NavLink activeClassName='is-active' to='/aboutus'>
                            <Nav.Item as="li">
                              <Nav.Link href='/aboutus'>Aboutus</Nav.Link>
                            </Nav.Item>
                          </NavLink>

                        </Nav>
                      </Navbar.Collapse>
                  </Container>
                </Navbar>
                
              
                <Switch>
                  <Route exact={true} path="/" component={Home} />
                  <Route exact={true} path="/aboutus" component={Aboutus} />
                  <Route exact={true} path="/plans" component={PlansList} />
                  <Route exact={true} path="/blog" component={BlogApp} />
                  {/* <Route exact={true} path="/login" component={loginPage} />
                  <Route exact={true} path="/signup" component={signupPage} /> */}


              <Route render={() => {
                return (
                      <Jumbotron>
                        <Container>
                          <Row>
                            <h3 className="display-3">Page not found</h3>
                          </Row>
                        </Container>
                      </Jumbotron>
                    );
                }} 
              />
              </Switch> 
            </Suspense>
          </Router>
          <footer expand="lg" className="Footerbt text-center">         
                        <div>© 2020 Copyright:
                            <a className="title"href="https://lindenustawi.com/"> Linden Ustawi</a>
                        </div>
                      
          </footer>   
    </Container>
  );
}


export default App;