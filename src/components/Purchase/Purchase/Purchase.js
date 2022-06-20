import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Purchase.css'

const Purchase = () => {
    const {id}=useParams();
    const[purchase,setPurchase]=useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/courses")
            .then(res => res.json())
            .then((data) => {
                const foundPurchase= data.filter(detail => detail._id == id)
                setPurchase(foundPurchase);
            })
    }, [])
    const { courses, description, img, price } = purchase[0] || {}
    return (
        <div>
            <div className="container mt-4  ">
            <div className="row justify-content-center align-items-center ">
                <div className="w-100">
                    <div className="card h-100 shadow-lg">
                        <img src={img} className="card-img-top " alt="..." />
                        <div className="card-body">

                            <h2 className="text-nowrap"><strong >Service:{courses}</strong></h2>
                            <h6 className="card-text"> <strong>Description:</strong> {description}</h6>

                            <h4 className="text-nowrap"><strong >Price:</strong>  {price}</h4>
                            <button className='purchase-now' >Purchase Now</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
            
        </div>
    );
};

export default Purchase;