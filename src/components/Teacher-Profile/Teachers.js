import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import './Teachers.css';

const Teachers = () => {
  const [teachers,setTeachers]=useState([]);
  useEffect( ()=>{
    fetch('./teacherdata.json')
    .then(res=>res.json())
    .then(data=> setTeachers(data))

  },[])


  
    return (
        
      <div>
      <div className='row row-cols-1 row-cols-3 g-4'>

        { 
        teachers.map(teacher=><Teacher
        key={teacher._id}
          teacher={teacher}></Teacher> )
        
        }

      </div>
{/* 
//         <div className="container">
//             <h1 className='text-center my-5'> <span className='try'> OUR  TEACHER'S PROFILE</span></h1>
//   <div className="row">
//     <div className="col-sm"> <div className="card">
//   <img className="card-img-top" src={gogo} alt=""  height="250px"/>
//   <div className="card-body">
//     <h5 className="card-title">patient dependencies</h5>
//     <p className="card-text">Advice patient how to protect your teeth.life is happy if your health is well</p>
//     <a href="/" className="btn btn-primary">see update</a>
    
//   </div>
// </div> </div>
//     <div className="col-sm"> <div className="card">
//   <img className="card-img-top" src={pogo} alt="" height="250px"/>
//   <div className="card-body">
//     <h5 className="card-title">operation time</h5>
//     <p className="card-text">Patients think about teeth ,we think about patient.</p>
//     <a href="/" className="btn btn-primary">see update</a>
//   </div>
// </div> </div>
//     <div className="col-sm"> <div className="card">
//   <img className="card-img-top" src={mogo} alt=""  height="250px"/>
//   <div className="card-body">
//     <h5 className="card-title">Succesful operation</h5>
//     <p className="card-text"> after Succesful dentist activity the child smile like he is true happiest person.</p>
//     <a href="/" className="btn btn-primary">see update</a>
//   </div>
// </div></div>
//   </div>
//   <div className="row">
//     <div className="col-sm"> <div className="card">
//   <img className="card-img-top" src={aogo} alt=""  height="250px"/>
//   <div className="card-body">
//     <h5 className="card-title">patient dependencies</h5>
//     <p className="card-text">Advice patient how to protect your teeth.life is happy if your health is well</p>
//     <a href="/" className="btn btn-primary">see update</a>
    
//   </div>
// </div> </div>
//     <div className="col-sm"> <div className="card">
//   <img className="card-img-top" src={bogo} alt="" height="250px"/>
//   <div className="card-body">
//     <h5 className="card-title">operation time</h5>
//     <p className="card-text">Patients think about teeth ,we think about patient.</p>
//     <a href="/" className="btn btn-primary">see update</a>
//   </div>
// </div> </div>
//     <div className="col-sm"> <div className="card">
//   <img className="card-img-top" src={cogo} alt=""  height="250px"/>
//   <div className="card-body">
//     <h5 className="card-title">Succesful operation</h5>
//     <p className="card-text"> after Succesful dentist activity the child smile like he is true happiest person.</p>
//     <a href="/" className="btn btn-primary">see update</a>
//   </div>
// </div></div>
//   </div><br /><br />
// </div> */}
</div>
    );
};

export default Teachers;