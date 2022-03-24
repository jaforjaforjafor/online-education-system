import React from 'react';
import { Carousel } from 'react-bootstrap';
import pogo from '../Images/home-1.jpg';
import nogo from '../Images/home-2.jpg';
import jogo from '../Images/carousel-3.jpg';

const Banner = () => {
    return (
        <div>
             
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={nogo}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Studyig hard</h3>
      <p>follow our instruction.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={pogo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Gain Knowledge</h3>
      <p>Check our courses</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src={jogo}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className='text-warning'>Success</h3>
      <p className='text-danger'>Our Successful Students.</p>
      
    </Carousel.Caption>
  </Carousel.Item>
  
  </Carousel>
  <br /><br />
        </div>
    );
};

export default Banner;