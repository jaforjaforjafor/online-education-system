import React from 'react';
import './Medium.css'
import pogo from '../Images/home-1.jpg';
import nogo from '../Images/home-2.jpg';
import ogo from '../Images/home-4.jpg';
import logo from '../Images/home-3.jpg';

const Medium = () => {
    return (
        <div >
            
        <div className='home-colour'>
          <h2> <span className='welcome'> Online Education System </span> </h2> 
           <p className='we'>We provide online-education, nowadays it is one of the best  education system,people like to admit this system,if you are interested please enroll.</p> 
         </div>
        <div className='margin'>
        <div className="d-flex">
            <div className="mx-5">
            <h1 className="text-success">We Care About Education </h1>
        <p className="text-dark">There is a proverb that "Education is the passport to the future, for tomorrow belongs to those who prepare for it today". So if you need any kind of advice please tell us,we have ourexperienced teacher's now in online. </p> 
            </div>
            <img  className='choto' src={logo} alt=""height="350px" />
            
           
        </div>
       
        <div className="container">
        <h1 className='text-center my-5 text-primary'>Our Features</h1>
<div className="row">
<div className="col-sm"> <div className="card">
<img className="card-img-top" src={pogo} alt=""  height="250px"/>
<div className="card-body">
<h5 className="card-title">Student dependencies</h5>
<p className="card-text">Advice teacher's how to gain knowledge.feel freshness  if your education is well</p>


</div>
</div> </div>
<div className="col-sm"> <div className="card">
<img className="card-img-top" src={nogo} alt="" height="250px"/>
<div className="card-body">
<h5 className="card-title">Online CLass  time</h5>
<p className="card-text">Student  think about Education,we think about student.</p>

</div>
</div> </div>
<div className="col-sm"> <div className="card">
<img className="card-img-top" src={ogo} alt=""  height="250px"/>
<div className="card-body">
<h5 className="card-title">Succesful Exam</h5>
<p className="card-text"> after Successful  online  exam the student feels like he is happy .</p>

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