import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {id}=useParams();
    const[purchase,setPurchase]=useState([]);
    
    useEffect(() => {
        fetch("/coursedata.json")
            .then(res => res.json())
            .then((data) => {
                const foundPurchase= data.filter(detail => detail._id == id)
                setPurchase(foundPurchase);
            })
    }, [])
    const { name, description, image, price } = purchase[0] || {}
    return (
        <div>
            <div className="container mt-4  ">
            <div className="row justify-content-center align-items-center ">
                <div className="w-50">
                    <div className="card h-100 shadow-lg">
                        <img src={image} className="card-img-top " alt="..." />
                        <div className="card-body">

                            <p className="text-nowrap"><strong >Service:{name}</strong></p>
                            <p className="card-text"> <strong>Description:</strong> {description}</p>

                            <p className="text-nowrap"><strong >Price:</strong> $ {price}</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
            
        </div>
    );
};

export default Purchase;