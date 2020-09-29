import React from 'react';
import HomeCarousel from '../containers/pages/HomeCarousel';
import Aboutus from './aboutus';
// import Reelcarousel from './Reelcarousel'
import './App.css'
import { Container } from 'react-bootstrap';

const Home = () => {
    return(
        
        <Container class='row'>
        <br/>
            <Container>
                <HomeCarousel/>
            </Container>
            <Container>
            <div className="yogapose2">
            <img src="https://res.cloudinary.com/deya21gvu/image/upload/v1601049128/LU%20pics/APNG/yogapose2_pxtzso.png" alt="Peace"></img>
            </div>
            </Container>
            <br/>
             <div>
                <Aboutus/>       
            </div>
            <br/>
            <Container class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <div class="row">
                            <div class="col-6">
                                
                            </div>
                            
                        </div>
                        <ul class="nav">
                            <li class="nav-item"><a href="" class="nav-link pl-0"><i class="fa fa-facebook fa-lg"></i></a></li>
                            <li class="nav-item"><a href="" class="nav-link"><i class="fa fa-twitter fa-lg"></i></a></li>
                            <li class="nav-item"><a href="" class="nav-link"><i class="fa fa-github fa-lg"></i></a></li>
                            <li class="nav-item"><a href="" class="nav-link"><i class="fa fa-instagram fa-lg"></i></a></li>
                        </ul>
                        <br/>
                    </div>
                    <div className="App">
    <p>Contact Me</p>
    <div>
    <form action="/action_page.php">
    <label>First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
    <label>Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />


    <label>Email</label>
    <input type="email" id="email" name="email" placeholder="Your email" />


    <label>Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
    <input type="submit" value="Submit" />
    </form>
    </div>
    </div>
    </div>
    </div>
        </Container>
    
            {/* <div>
                <Reelcarousel/>
            </div>
             */}
                {/* <footer  className="footer py-1 bg-white">         
                        <div id="footer" className="container-fluid text-center">© 2020 Copyright:
                            <a href="https://mdbootstrap.com/"> Linden Ustawi</a>
                        </div>
                      
                </footer>           */}
        </Container>
        )
}
state = {
    fname: "",
    lname: "",
    email: "",
    message: "",
}

handleSubmit = (e) =>{
     e.preventDefault();
     this.setState({
        [e.target.name]: e.target.value

})
}


export default Home;