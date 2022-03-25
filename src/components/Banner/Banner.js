import React from 'react';
import { Carousel } from 'react-bootstrap';
import pogo from '../Images/home-1.jpg';
import nogo from '../Images/home-2.jpg';
import jogo from '../Images/carousel-3.jpg';

const Banner = () => {
    return (
        <div>
             
             <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pogo}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>OUr Education online</h3>
      <p>new way of education system.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={nogo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Teacher doing his job</h3>
      <p>in online system teacher doing his outstanding job .</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={jogo}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Students learning</h3>
      <p>students online course.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  
        </div>
    );
};

export default Banner;