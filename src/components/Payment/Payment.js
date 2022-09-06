import React from 'react';
import "./Payment.css";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Payment = () => {
    const {purchaseId}=useParams();
    const [payment,setPayment]=useState({});
    useEffect(()=>{
        fetch(`https://pure-oasis-80814.herokuapp.com/purchase/${purchaseId}`)
        .then(res=>res.json())
        .then(data=>setPayment(data))
    },[purchaseId])
    return (
        <div>
            <h2 className='payment-color text-center'>Payment:{purchaseId}</h2><br /><br />
            
            <h4 className='text-primary'>Pay: $</h4>
            <button>purchase</button>
            
            
        </div>
    );
};

export default Payment;