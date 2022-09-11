import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
    
    const {id}=useParams();
    const[serviceDetails,setServiceDetails]=useState([]);
    useEffect(() => {
        fetch("https://pure-oasis-80814.herokuapp.com/teachers")
            .then(res => res.json())
            .then((data) => {
                const foundService= data.filter(detail => detail._id == id)
                setServiceDetails(foundService);
            })
    }, [])
    const { teachers, designation, img, email,expert } = serviceDetails[0] || {};
    

    return (
        <>
        <div className='d-flex'> 
            <div className="container mt-4 ">
                
            <div className="row justify-content-center align-items-center ">
                <div className="w-100">
                
                    <div className="card h-100 shadow-lg">
                        <img src={img} className="card-img-top " alt="..." />
                        <div className="card-body">

                            <p className="text-nowrap"><strong >Name:{teachers}</strong></p>
                            <p className="card-text"> <strong>Designation:{designation}</strong> </p>

                            <p className="text-nowrap"><strong >email:{email}</strong>  </p>
                            <p className="text-nowrap"><strong >expert:{expert}</strong>  </p>
                            
                            <a href="https://mail.google.com">Contact Me </a>

                    
                        </div>

                    </div>
                    
                    
                </div>
                
            </div>
            

        </div>
        <div >
        <button className="btn btn-light fs-4  "><Link to="/home"  >Go to Home</Link></button>
        </div>

        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
       
        </>
    );
};

export default ServiceDetails;