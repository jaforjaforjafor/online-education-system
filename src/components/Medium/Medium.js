import React from 'react';
import pogo from '../Images/home-1.jpg';
import nogo from '../Images/home-2.jpg';
import ogo from '../Images/home-4.jpg';
import logo from '../Images/home-3.jpg';

const Medium = () => {
    return (
        <div >
            
        <div className='home-colour'>
          <h2> <span className='welcome'> Online-Education System </span> </h2> 
           <p className='we'>we provide online-education,iIt is one of the best  education system in the recent days,many people's are like to admit in that online system,if you are interested please enroll now. </p> 
         </div>
        <div >
        <div className="d-flex">
            <div className="mx-5">
            <h1 className="text-success">We Care About Education.Good education gives u freshness </h1>
        <p className="text-primary">Care about Your education,the proverb goes that'education is the necesscity for the nation.if you need any kind of advise please tell us  cause our specialist teacher's are  now also in online .</p> 
            </div>
            <img src={logo} alt=""height="350px" />
            
           
        </div>
        <div >
            <a  href=""className='join-now' >JOIN NOW</a>
            
            </div>
        <div className="container">
        <h1 className='text-center my-5'>OUR  Features</h1>
<div className="row">
<div className="col-sm"> <div className="card">
<img className="card-img-top" src={pogo} alt=""  height="250px"/>
<div className="card-body">
<h5 className="card-title">Student dependencies</h5>
<p className="card-text">Advice teacher's how to gain knowledge.feel freshness  if your education is well</p>
<a hRef="" className="btn btn-primary">see update</a>

</div>
</div> </div>
<div className="col-sm"> <div className="card">
<img className="card-img-top" src={nogo} alt="" height="250px"/>
<div className="card-body">
<h5 className="card-title">Online CLass  time</h5>
<p className="card-text">Student  think about Education,we think about student.</p>
<a hRef="" className="btn btn-primary">see update</a>
</div>
</div> </div>
<div className="col-sm"> <div className="card">
<img className="card-img-top" src={ogo} alt=""  height="250px"/>
<div className="card-body">
<h5 className="card-title">Succesful Exam</h5>
<p className="card-text"> after Successful  online  exam the student feels like he is happy .</p>
<a hRef="" className="btn btn-primary">see update</a>
</div>
</div></div>
</div>
</div>


            
        
        
        
        
       <br /><br /><br />
       
      </div>
          </div>
    );
};

export default Medium;