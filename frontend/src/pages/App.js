import React, {Suspense} from 'react';
// import {Link, Router, Route} from 'react-router'
// import { Router } from "@reach/router";
// import {Link} from "gatsby";
import {Jumbotron, Row, Container, Nav, Navbar, Col} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../Static/Img/lu-logo-slant.png';


// import profileicon from '../Static/Img/Asset1.png';
//import signupPage from '../containers/pages/signupcomponenets/signup';
// import loginPage from '../containers/pages/logincomponents/login';
// import forum from '../containers/pages/forumcomponents/forum';
// import Navigation from "../components/mainnav";

import Home from './home';
import PlansList from './plans';
import BlogApp from './Index';
import Aboutus from './aboutus';
import './App.css'


import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom" 







const App = () => {
  return (


    <Container fluid> {/**Topmost container set to fluid to get from end to end of page */}
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
        {/* <Container>
            <Navbar className= "Navline" expand="lg"> </Navbar> 
            <Container className="align-center ml-auto mr-auto">
            
            </Container> 
            <Navbar  expand="lg">
              <Navbar.Brand path="/"><Link  activeClassName='is-active' to='/'><img src={logo} alt='company-logo' className='App-logo'/></Link></Navbar.Brand>
            
            
              <Nav className="mr-auto" as="ul">

                
                  <Nav.Item>
                    <img 
                      className="yogapose2" 
                      src="https://res.cloudinary.com/deya21gvu/image/upload/v1601049110/LU%20pics/APNG/lutea2_rlvgqd.png" 
                      alt="Peace">
                    </img>
                  </Nav.Item>
                
                
              </Nav>



              <Navbar className='Navitext'>
                <Link 
                  className='Navitext' 
                  activeClassName='is-active'
                  to='/'>
                  Linden Ustawi
                </Link>
              </Navbar>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="success">
                <Nav className="ml-auto" as="ul">

                <Link 
                  className="nav-link" 
                  activeClassName='is-active' 
                  to='/'>
                    <Nav.Item as="li">
                      <li href='/'>Home</li>
                    </Nav.Item>
                </Link>

                <Link 
                  className="nav-link" 
                  activeClassName='is-active' 
                  to='/plans'>
                    <Nav.Item as="li">
                      <li href='/plans'>Plans and Pricings</li>
                    </Nav.Item>
                </Link>

                </Nav>
              </Navbar.Collapse>
            </Navbar> 
          </Container>   */}
          <Container>
            <Navbar className="Navline" >
              <Container>{/**We are putting all inside Navbar container so as to center it on parent fluid */}
                  {/** The above makes the menu toggle responsively. Notice the reference to the id of Navbar.Collapse below */}

                    <Nav className="mr-auto" as="ul">

                      {/* <NavLink activeClassName='is-active' to='/'>
                        <Nav.Item>
                          <Nav.Link href=''><img src={profileicon} alt='profileicon' className='profileicon'/></Nav.Link>
                        </Nav.Item>
                      </NavLink> */}
                      {/* <NavLink activeClassName='is-active' to='/login'>
                        <Nav.Item>
                          <Nav.Link href='/login'>login</Nav.Link>
                        </Nav.Item>
                      </NavLink>
                      <NavLink activeClassName='is-active' to='/signup'>
                        <Nav.Item>
                          <Nav.Link href='/signup'>sign up</Nav.Link>
                        </Nav.Item>
                      </NavLink> 
                      <Nav.Item>
                        <Form action='/search' inline className="justify-content-end">
                          <ButtonGroup className='ml-2 border rounded'>
                            <FormControl size="sm" type="text" placeholder="Search" />
                            <Button size="sm" variant='outline-light' type="submit">Submit</Button>
                          </ButtonGroup>
                        </Form>
                      </Nav.Item> */}
                    </Nav>
              </Container>
            </Navbar>
          </Container>
          <Navbar expand="lg">
            <Container>{/**We are putting all inside Navbar container so as to center it on parent fluid */}

                <Nav className="mr-auto" as="ul">
                      <Nav.Item>
                        <img 
                          className="yogapose2" 
                          src="https://res.cloudinary.com/deya21gvu/image/upload/v1601049110/LU%20pics/APNG/lutea2_rlvgqd.png" 
                          alt="Peace">
                        </img>
                      </Nav.Item>
                </Nav>

                <Navbar.Brand href="/"><img src={logo} alt='company-logo' className='App-logo'/></Navbar.Brand>
                <Navbar  href="/" className='Navitext'>
                  Linden Ustawi
                </Navbar>
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                {/** The above makes the menu toggle responsively. Notice the reference to the id of Navbar.Collapse below */}
                <Navbar.Collapse id="basic-navbar-nav" > 
                <Col></Col>
                <Nav expand-lg>
                    <NavLink activeClassName='is-active' to='/' >
                      <Nav.Item>
                        <Nav.Link href='/'>Home</Nav.Link>
                      </Nav.Item>
                    </NavLink>
                    <NavLink activeClassName='is-active' to='/plans'>
                      <Nav.Item>
                        <Nav.Link href='/plans'>Plans and Pricings</Nav.Link>
                      </Nav.Item>
                    </NavLink>
                    <NavLink activeClassName='is-active' to='/blog'>
                      <Nav.Item>
                        <Nav.Link href='/blog'>Blog</Nav.Link>
                      </Nav.Item>
                    </NavLink>
                    {/* <NavLink activeClassName='is-active' to='/blogmanager'>
                      <Nav.Item>
                        <Nav.Link href='/blogManager'>BlogManager</Nav.Link>
                      </Nav.Item>
                    </NavLink> */}
                    {/* <NavLink activeClassName='is-active' to='/forum'>
                      <Nav.Item>
                        <Nav.Link href='/forum'>Forum</Nav.Link>
                      </Nav.Item>
                    </NavLink> */}
                    {/* <NavLink activeClassName='is-active' to='/forummanager'>
                      <Nav.Item>
                        <Nav.Link href='/forummanager'>ForumManager</Nav.Link>
                      </Nav.Item>
                    </NavLink> */}
                    <NavLink activeClassName='is-active' to='/aboutus'>
                      <Nav.Item>
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

            {/* <Route exact={true} path="/forum" component={forum} /> */}
            {/* <Route exact={true} path="/login" component={loginPage} />
            <Route exact={true} path="/signup" component={signupPage} /> */}
        
            {/**Route below is not associated with any path. This means that this route will be invoked
             * whenever any URL path entered is not found
             */}
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
      <Container>
      <footer  
      className="footer text-center">         
          <Container>© 2020 Copyright:
            <a href="https://lindenustawi.com/"> Linden Ustawi</a>
          </Container>
                  
      </footer>
      </Container>            
    </Container>


  );
}


export default App;