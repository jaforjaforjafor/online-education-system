import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import pogo from '../Images/contact-img.png';
import nogo from '../Images/j (1).jpg';
import jogo from '../Images/j (2).jpg';

const Banner = () => {
    return (
        <div>
             
             <Carousel fade>
  <Carousel.Item>
    <img 
      className="banner-item-1"
      src={pogo}
      alt="First slide"
      width='200px'
      
    />
    <Carousel.Caption>
      <h3>Online Education </h3>
      <p>New way of education system.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="banner-item-2"
      src={nogo}
      alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="banner-item-3"
      src={jogo}
      alt="Third slide"
    />

  
  </Carousel.Item>
</Carousel>
<br /><br />
  
        </div>
    );
};

export default Banner;