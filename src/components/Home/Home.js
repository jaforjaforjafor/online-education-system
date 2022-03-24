import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Medium from '../Medium/Medium';
import Teachers from '../Teacher-Profile/Teachers';
import Contact from '../Contact/Contact';
import Courses from '../OurCourses/Courses';




const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Medium></Medium>
          <Teachers></Teachers>
          <Courses></Courses>
          <Contact></Contact>
    </div>
   

    );
};

export default Home;