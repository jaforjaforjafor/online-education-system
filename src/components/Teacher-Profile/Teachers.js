import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import './Teachers.css';

const Teachers = () => {
  const [teachers,setTeachers]=useState([]);
  useEffect( ()=>{
    fetch('http://localhost:5000/teachers')
    .then(res=>res.json())
    .then(data=> setTeachers(data))

  },[])


  
    return (
        
      <div className='container-fluid'>
      <div className='row row-cols-1 row-cols-3 g-2'>

        { 
        teachers.map(teacher=><Teacher
        key={teacher._id}
          teacher={teacher}></Teacher> )
        
        }

      </div>
      <br /><br />
     
</div>
    );
};

export default Teachers;