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
       <div className='row row-cols-1 row-cols-3 g-4'>

         { 
         courses.map(course=><Course
         key={course._id}
           course={course}></Course> )
         
         }

       </div>
       
       
     {/* 
         
        <div className="container">
            <h1 className='text-center my-5'> <span className=' course-color'> Our  Courses
            </span><br />
            </h1>
            
  <div className="row">
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={cogo} alt=""  height="250px"/>
  <div className="card-body">
    <h5 className="card-title">IELTS Course</h5>
    <p className="card-text">New level of IELTS,high experince Teachers are here</p>
    <a href="/" className="btn btn-primary">see update</a>
    
  </div>
</div> </div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={cgo} alt="" height="250px"/>
  <div className="card-body">
    <h5 className="card-title">Mathmatics Course</h5>
    <p className="card-text">Vector,geometry,matrics claases.</p>
    <a href="/" className="btn btn-primary">see update</a>
  </div>
</div> </div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={go} alt=""  height="250px"/>
  <div className="card-body">
    <h5 className="card-title">Digital Marketing Course</h5>
    <p className="card-text"> our members also gain the knowledge of digital marketing.</p>
    <a href="/" className="btn btn-primary">see update</a>
  </div>
</div></div>
  </div>
  <div className="row">
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={aogo} alt=""  height="250px"/>
  <div className="card-body">
    <h5 className="card-title">Art Course</h5>
    <p className="card-text">Art classes are one of the best courses in our education</p>
    <Link to ="/"></Link>
    
  </div>
</div> </div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={bogo} alt="" height="250px"/>
  <div className="card-body">
    <h5 className="card-title">Child Course</h5>
    <p className="card-text">Children are interested  to join online classes  </p>
    <a hRef="" className="btn btn-primary">see update</a>
  </div>
</div> </div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={logo} alt=""  height="250px"/>
  <div className="card-body">
    <h5 className="card-title">Other course</h5>
    <p className="card-text"> Every peoples are asking to know about our courses.</p>
    <a hRef="" className="btn btn-primary">see update</a>
  </div>
</div></div>
  </div><br /><br />
</div> */}
</div>
       
    );
};

export default Courses;