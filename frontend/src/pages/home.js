import React from 'react';
import HomeCarousel from '../containers/pages/HomeCarousel';
import Aboutus from './aboutus';
// import Reelcarousel from './Reelcarousel'
import './App.css'
import { Container } from 'react-bootstrap'
import Navigation from '../components/mainnav';

const Home = () => {
    return(
        
        <Container class='row'>
        <br/>
        
            <Container>
                <HomeCarousel/>
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
                    <div class="col-md-8">
                        <h3 className="Cartext text-md-left" >Contact Us</h3>
                        
                    </div>
                    <div class="col-md-4">
                        <form>
                        <fieldset class="form-group">
                                <input type="text" class="form-control" id="text" placeholder="Name"/>
                            </fieldset>
                            <fieldset class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                            </fieldset>
                            <fieldset class="form-group">
                                <textarea class="form-control" id="exampleMessage" placeholder="Message"></textarea>
                            </fieldset>
                            <fieldset class="form-group text-xs-right">
                                <button type="button" class="btn  border ">Send</button>
                            </fieldset>
                        </form>
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

export default Home;