import React, { Component } from "react"
import HomeCarousel from "../containers/pages/HomeCarousel"
import Aboutus from "./aboutus"
// import Reelcarousel from './Reelcarousel'
import "./App.css"
import { Container } from "react-bootstrap"

class Home extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    message: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <Container class="row">
        <br />
        <Container>
          <HomeCarousel />
        </Container>
        <Container>
        </Container>
        <br />
        <div>
          <Aboutus />
        </div>
        <br />
        <Container class="footer">
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
              <div className="App">
                <p>Contact Me</p>
                <div>
                  <form onSubmit={this.handleSubmit}>
                    <label htmlFor="fname">First Name</label>
                    <input
                      type="text"
                      id="fname"
                      name="firstname"
                      placeholder="Your name.."
                      onChange={this.handleChange}
                    />
                    <label htmlFor="sname">Last Name</label>
                    <input
                      type="text"
                      id="lname"
                      name="lastname"
                      placeholder="Your last name.."
                      onChange={this.handleChange}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your email"
                      onChange={this.handleChange}
                    />

                    <label htmlFor="textarea">Subject</label>
                    <textarea
                      id="subject"
                      name="subject"
                      placeholder="Write something.."
                      onChange={this.handleChange}
                    ></textarea>
                    <input type="submit" value="submit" />
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
}

export default Home
