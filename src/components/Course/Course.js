import React from 'react';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const { _id,image,courses,price,description}=props.course;
    return (

        <div className="col">
                <div className="card h-100 shadow-lg" >
                    <img src={image} className="card-img-top" width="500" height="500" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{courses}</h5>
                        <p className="card-text"> <strong>Description:</strong> {description}</p>
                        <p className="text-nowrap"><strong >Price:</strong>{price}</p>
                        <Link to={`/purchase/${_id}`}>
                        <button className="btn btn-dark"><img  alt="" width="25" />
                         Purchase {courses.toLowerCase()}</button>
                        </Link>
                       
                    </div>

                </div>
            </div>
    
    
           

        
    );
};

export default Course;