import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = (props) => {
    const { _id,img,courses,price,description}=props.course;
    return (
    
<div className="col-12  ">
            
            <div className="card h-100 shadow-lg  " >
                <img src={img} className="card-img-top"  height="100" width="100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> Courses: {courses}</h5>
                    <p className="card-text"> <strong>Description:</strong> {description}</p>
                    <p className="text-nowrap"><strong >Price:</strong>{price}</p>
                    <Link to={`/purchase/${_id}`}>
                    <button className="btn btn-dark"><img  alt="" width="25" />
                     Purchase: {courses}</button>
                    </Link>
                   
                </div>

            </div>
        </div>


       

    
    );
};

export default Course;