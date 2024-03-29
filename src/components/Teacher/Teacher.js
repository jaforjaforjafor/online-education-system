import React from 'react';
import { Link } from 'react-router-dom';

const Teacher = (props) => {
    const { _id,teachers,img,email,expert,designation}=props.teacher;
    return (
        
        <div className="col-12  mx-1 my-1 ">
            <br /><br />
        <div className="card h-100   shadow-lg" >
            <img src={img} className="card-img-top" width="450" height="150" alt="..." />
            <div className="card-body h-100 w-400">
                <h2>Name:<span style={{'color':'navy'}}> {teachers}</span></h2>
                <h5 className="card-title">Email:{email}</h5>
                <p className="card-text"> <strong>Designation:</strong> {designation}</p>
                <p className="text-nowrap"><strong >expert:</strong>{expert}</p>
                <Link to={`/service/${_id}`}>
                <button className="btn btn-dark"><img  alt="" width="25" />
                 Contact {teachers}</button>
                </Link>
               
            </div>

        </div>
    </div>
    );
};

export default Teacher;