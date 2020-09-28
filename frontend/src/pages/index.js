import React from 'react';
// import {Link, Router, Route} from 'react-router'
// import Home from '../containers/pages/home';
// import Aboutus from './Aboutus';
// import logo from '../Static/Img/lu-logo.png';
// import profileicon from '../Static/Img/Asset1.png';
import './App.css'
// import BlogApp from './Blog';
// import forum from '../containers/pages/forumcomponents/forum';
// import PlansList from '../containers/pages/planscomponents/Plans';
// import loginPage from '../containers/pages/logincomponents/login';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import signupPage from '../containers/pages/signupcomponenets/signup';
import { Container } from 'react-bootstrap';
import Navigation from "../components/Mainnav"


const App = () => {
  return (
    <Container>
    <Navigation/>
    <Container>
        <footer>
        <div  className="footerbt container text-center">© 2020 Copyright:
          <a path="https://lindenustawi.com/"> Linden Ustawi</a>
          </div>
        </footer>
    
    </Container>
  </Container>

  );
}


export default App;