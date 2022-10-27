import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const {id}=useParams();
  const[courseDetails,setCourseDetails]=useState([]);
    
    useEffect(() => {
        fetch("https://pure-oasis-80814.herokuapp.com/teachers")
            .then(res => res.json())
            .then((data) => {
                const foundcourseDescriptions= data.filter(detail => detail._id == id)
                setCourseDetails(foundcourseDescriptions);
            })
    }, [])
    const {teachers } = courseDetails[0] || {}
    return (
        <div className='mx-5'>
      <br />
        <h3 className='text-center text-primary'>Data Science course teacher </h3>
        <br /><br />
        
        <div className="card h-100   shadow-lg" >
            <img src='https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg' width='400px' height='300px' className="card-img-top"alt="..." />
            <div className="card-body h-100 w-400">
                <h2 className='text-center'>Name:tarin akter</h2>
                
              
               
            </div>

        </div>
        
        {/* <img  className='m-5'src='https://www.nea.org/sites/default/files/legacy/2020/04/new_teacher.jpeg' width='250' height='250' ></img>
        <h3 className='text-center'>Instructor:Tarin Akter </h3> */}
        <br /><br /><br />
        <h3 className='text-center' style={{
            'color':'red'
        }}>Duration:(3.9 hours) </h3>
        <h3 className='text-center' style={{
            'color':'orange'
        }}>Course Level:Advance</h3>
        
        
       <p className='fs-4 text-center'> good and skillful course .If you want to learn many more thing in your valuable life and want to gain your knowledge about that .It will develop your skill and experience. </p> 
      </div>
   

        
    );
};

export default CourseDetails;