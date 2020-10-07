import React, { Component } from "react"
import HomeCarousel from "../containers/pages/HomeCarousel"
import Aboutus from "./aboutus"
import emailjs from "emailjs-com";
// import Reelcarousel from './Reelcarousel'
import "./App.css"
import { Container } from "react-bootstrap"

function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_s4plr4a', e.target, 'user_NDMZL6KsYA29lZZeakAMV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
}

  const Home = () => {
    return (
      <Container class="row">
        
         <br/>
        <Container>
          <HomeCarousel />
        </Container>
        <Container>
        </Container>
        <br />
        <br />
        <br/>
        <br/>
        <br/>
        <div>
          <Aboutus />
        </div>
        <br />
        <br />
        <br/>
        <br/>
        <br/>
      
        <Container class="Contactfooter">
          <div class="container">
            <div class="row">
              <div class="col-md-5">
                <div class="row">
                  <div class="col-6"></div>
                </div>
                <ul class="nav">
                  <li class="nav-item">
                    <a href="" class="nav-link pl-0">
                      <i class="fa fa-facebook fa-lg"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="nav-link">
                      <i class="fa fa-twitter fa-lg"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="nav-link">
                      <i class="fa fa-github fa-lg"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="nav-link">
                      <i class="fa fa-instagram fa-lg"></i>
                    </a>
                  </li>
                </ul>
                <br />
              </div>
              <div className="Contacttext">
               Contact Us
               </div>
              <div className="container">
                    <form className="contact-form" onSubmit={sendEmail}>
      <div className="row pt-5 mx-auto">
          <div className="col-8 form-group mx-auto">
              <input type="text" className="form-control" placeholder="Name" name="name"/>
          </div>
          <div className="col-8 form-group pt-1 mx-auto">
              <input type="email" className="form-control" placeholder="Email Address" name="email"/>
          </div>
          <div className="col-8 form-group pt-1 mx-auto">
              <input type="text" className="form-control" placeholder="Subject" name="subject"/>
          </div>
          <div className="col-8 form-group pt-1 mx-auto">
              <textarea className="form-control" id="" cols="30" rows="5"  placeholder="Your message" name="message"></textarea>
          </div>
          <div className=" col-8 pt-3 mx-auto">
              <input type="submit" className=" btn btn-info" value="Send Message"></input>
      </div>
      </div>
    </form>
     </div>
            </div>
          </div>
        </Container>

        {/* <div>
                <Reelcarousel/>
            </div>
             */}
             <br/>
      </Container>
     
    )
  }


export default Home