import React, { Suspense } from 'react';
import Home from '../containers/pages/home';
import Aboutus from '../containers/pages/Aboutus';
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
import { Jumbotron, Nav, Container, Navbar, Row, Col} from 'react-bootstrap';



//let us lazily import inventory manager so that it does not slow down startup of page

// const BlogApp = React.lazy(() => import('./Blog'));


const App = () => {
  return (
    <Container>
     <Router>
            <Home  path="/" component={Home} />
            <BlogApp path="/blog" component={BlogApp} />
            <Aboutus  path="/Aboutus" component={Aboutus} />
            <PlansList path="/plans" component={PlansList} />
            </Router>

        
    <Container>
      <footer>
        <div  className="footerbt container text-center">© 2020 Copyright:
          <a href="https://lindenustawi.netlify.app/"> Linden Ustawi</a>
          </div>
          </footer>
    </Container>
    </Container>
    

  );
}



export default App;