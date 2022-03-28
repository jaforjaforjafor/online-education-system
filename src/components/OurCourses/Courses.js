import React, { useEffect, useState } from 'react';
import './Courses.css';
import Course from '../Course/Course';

const Courses = () => {
  const [courses,setCourses]=useState([]);
  useEffect( ()=>{
    fetch('./coursedata.json')
    .then(res=>res.json())
    .then(data=> setCourses(data))

  },[])

    return (

     <div>
       <div className='row row-cols-1 row-cols-3 g-4 mx-20 my-20'>

         { 
         courses.map(course=><Course
         key={course._id}
           course={course}></Course> )
         
         }

       </div>
       
      
    

</div>
       
    );
};

export default Courses;