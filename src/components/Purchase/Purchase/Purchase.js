import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PlaceOrder from '../../PlaceOrder/PlaceOrder';
import './Purchase.css';

const Purchase = () => {
    const {id}=useParams();
    const[purchase,setPurchase]=useState([]);
    
    useEffect(() => {
        fetch("https://pure-oasis-80814.herokuapp.com/courses")
            .then(res => res.json())
            .then((data) => {
                const foundPurchase= data.filter(detail => detail._id == id)
                setPurchase(foundPurchase);
            })
    }, [])
    const { courses, description, img, price } = purchase[0] || {}
    return (
        <div className="container-fluid ">
        <div className="row ">
            <div className="col-md-6">
                <div className="card h-50 w-100  shadow-lg">
                    <img src={img} className="card-img-top" alt="..."  />
                    <div className="card-body">

                        <p className="text-nowrap"><strong >Service:{courses}</strong></p>
                        <p className="card-text"> <strong>Description:</strong> {description}</p>

                        <p className="text-nowrap"><strong >Price:</strong>{price}</p>
                    </div>

                </div>
            </div>
            <div className="col-md-8">
                <PlaceOrder></PlaceOrder>
            </div>
            
        </div>
        

    </div>

        // <div>
        //     <div className="container mt-4  ">

        //     <div className="row justify-content-center align-items-center ">
        //         <div className="w-100 col-md-4">
        //             <div className="card h-100 shadow-lg">
        //                 <img src={img} className="card-img-top " alt="..." />
        //                 <div className="card-body">

        //                     <h2 className="text-nowrap"><strong >Service:{courses}</strong></h2>
        //                     <h6 className="card-text"> <strong>Description:</strong> {description}</h6>

        //                     <h4 className="text-nowrap"><strong >Price:</strong>  {price}</h4>
        //                     <Link to={`/payment`}>
        //                     <button className='purchase-now' >Purchase Now</button>

        //             </Link>
        //                 </div>

        //             </div>
        //         </div>
        //     </div>
        
        //     <div className="col-md-4">
        //             <PlaceOrder></PlaceOrder>
        //         </div></div>
            
        // </div>
    );
};

export default Purchase;