import React, {Suspense} from 'react';
// import {Link, Router, Route} from 'react-router'
// import { Router } from "@reach/router";
// import {Link} from "gatsby";
import {Jumbotron, Row, Container, Nav, Navbar, Col} from 'react-bootstrap';
import Aboutus from './Aboutus';
import logo from '../Static/Img/lu-logo-slant.png';
import profileicon from '../Static/Img/Asset1.png';
import './App.css'
import BlogApp from './Blog';
// import forum from '../containers/pages/forumcomponents/forum';
import PlansList from './Plans';
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


<Container fluid className='w-100 p-0'> {/**Topmost container set to fluid to get from end to end of page */}
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar variant="light"  >
            <Container>{/**We are putting all inside Navbar container so as to center it on parent fluid */}
                {/** The above makes the menu toggle responsively. Notice the reference to the id of Navbar.Collapse below */}
                  <Col></Col>
                  <Nav className="justify-content-end">
                    
                    <NavLink activeClassName='is-active' to='/'>
                      <Nav.Item>
                        <Nav.Link href=''><img src={profileicon} alt='profileicon' className='profileicon'/></Nav.Link>
                      </Nav.Item>
                    </NavLink>
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
          <Navbar variant="light" className="navline">
            <Container>{/**We are putting all inside Navbar container so as to center it on parent fluid */}
                <Navbar.Brand href="/"><img src={logo} alt='company-logo' className='App-logo'/></Navbar.Brand>
                <Navbar className='navbar-text'>
                  Linden Ustawi
                </Navbar>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
                {/** The above makes the menu toggle responsively. Notice the reference to the id of Navbar.Collapse below */}
                <Navbar.Collapse id="responsive-navbar-nav" > 
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
            {/** Below is for routing to blog Manager */}
            {/* <Route exact={true} path="/blogmanager" component={BlogManager} /> */}
            {/** Below is for routing to forum Manager */}
            {/* <Route exact={true} path="/forummanager" component={ForumManager} /> */}
            {/* <Route exact={true} path="/forum" component={forum} /> */}
            <Route exact={true} path="/plans" component={PlansList} />
            <Route exact={true} path="/blog" component={BlogApp} />
            {/* <Route exact={true} path="/login" component={loginPage} />
            <Route exact={true} path="/signup" component={signupPage} /> */}
            {/** Below is for routing URL that matches the path patter /hello/:variable */}
            {/* <Route path="/hello/:name" render={({match}) => {
              return (
                    <Jumbotron>
                      <Container>
                        <Row>
                          <h3 className="display-3">Hello {match.params.name}!</h3>
                        </Row>
                      </Container>
                    </Jumbotron>
                  );
              }}
            /> */}
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
    </Container>


  );
}


export default App;