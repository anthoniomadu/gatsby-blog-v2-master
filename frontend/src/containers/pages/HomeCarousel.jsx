import React, {useState} from 'react';
// import { Carousel, Container, Image } from 'react-bootstrap';
// import ReactHtmlParser from 'react-html-parser';
import home1 from '../../Static/Img/home.jpg';
import home2 from '../../Static/Img/Home1.jpg';
import home3 from '../../Static/Img/Home2.jpg';
import Carousel from 'react-bootstrap/Carousel'



const HomeCarousel = () => {
                             
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        return (
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={home1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={home2}
                alt="Second slide"
              />
      
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={home3}
                alt="Third slide"
              />
      
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      }
      
    
export default HomeCarousel;