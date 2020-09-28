import React from 'react';
import './App.css'
import aboutus2 from '../Static/Img/Aboutus.jpg'; 
import { Container } from 'react-bootstrap';


const Aboutus = () => {
    return(
    
        <Container >

                <div class="card mb-3 h-100" >
                <div class="row no-gutters">
                    <div class="col-md-7">
                    <img src={aboutus2} alt= "" class="card-img" />
                    </div>
                    <div class="col-md-5">
                    <div class="card-body">
                        <h5 class="card-title">About Us</h5>
                        <p class="card-text"> Founded in 2020 by a team of 6 young and passionate youths who saw the need for
                            a safe space for youths like themselves.
                                Linden Ustawi provides a mix of a social platform and a blog which allows you to
                            interact with others while providing you with articles carefully written and curated to
                            provide best results. We seek to bridge the mental health gaps in
                            society, while fostering new and healthy friendships.
                                Linden Ustawi sees  your health as more than just the physical, we care about your
                            mental health too. 
                            At Linden Ustawi, your overall well-being is our happy place.
                            </p>
                        
                    </div>
                    </div>
                </div>
                </div>
        </Container>
        )
}

export default Aboutus;

// alt="Responsive" width= '550px' height= '1000px' margin-Left= '560px'