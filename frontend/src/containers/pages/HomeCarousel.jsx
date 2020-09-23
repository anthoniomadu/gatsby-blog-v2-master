import React from 'react';
// import { Carousel, Container, Image } from 'react-bootstrap';
// import ReactHtmlParser from 'react-html-parser';
import home1 from '../../Static/Img/home.jpg';
import home2 from '../../Static/Img/Home1.jpg';
import home3 from '../../Static/Img/Home2.jpg';


const HomeCarousel = () => {

    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" height='10'>
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img class="d-block h-10 w-100" src={home1} alt="First slide" />
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src={home2} alt="Second slide"/>
            </div>
            <div class="carousel-item ">
            <img class="d-block w-100" src={home3} alt="Third slide"/>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>
        
    );
    
}
export default HomeCarousel;