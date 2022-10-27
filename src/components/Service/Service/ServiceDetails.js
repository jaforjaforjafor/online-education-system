import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const history = useHistory();
    const goBack = () => {
        history.goBack()
      }
      

    
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
    const {_id, teachers, designation, img, email,expert } = serviceDetails[0] || {};
    

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
                            
                            <Link to={`/myclasses/${_id}`}
                            serviceDetails={serviceDetails}
                            >
                <button className="btn btn-dark"><img  alt="" width="25" />
                 My Classes</button>
                </Link>
               

                    
                        </div>

                    </div>
                    
                    
                </div>
                
            </div>
            

        </div>
        <br />
        <div ><br />
        <button className="btn btn-dark fs-4  " onClick={goBack}> Back</button>
        </div>

        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
       
        </>
    );
};

export default ServiceDetails;