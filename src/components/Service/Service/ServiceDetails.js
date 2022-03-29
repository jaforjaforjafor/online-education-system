import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {id}=useParams();
    const[serviceDetails,setServiceDetails]=useState([]);
    useEffect(() => {
        fetch("/teacherdata.json")
            .then(res => res.json())
            .then((data) => {
                const foundService= data.filter(detail => detail._id == id)
                setServiceDetails(foundService);
            })
    }, [])
    const { name, designation, image, email,expert } = serviceDetails[0] || {}

    return (
        <div>
            <div className="container mt-4  ">
            <div className="row justify-content-center align-items-center ">
                <div className="w-100">
                    <div className="card h-100 shadow-lg">
                        <img src={image} className="card-img-top " alt="..." />
                        <div className="card-body">

                            <p className="text-nowrap"><strong >Name:{name}</strong></p>
                            <p className="card-text"> <strong>Designation:{designation}</strong> </p>

                            <p className="text-nowrap"><strong >email:{email}</strong>  </p>
                            <p className="text-nowrap"><strong >expert:{expert}</strong>  </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>

        </div>
    );
};

export default ServiceDetails;