import React from 'react';
import "./Payment.css";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise=loadStripe('pk_test_51Le6ClH6WcnbdNiBC6zw5hopMzhVfk9MZiejqrjb0PrRcemysoNXh52YQ2HunUSkpyEU7SAqVlehViiarsm5YQRK00eRrSMzTm')

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
            <Elements stripe={stripePromise}>
      <CheckoutForm
              payment={Payment}
      />
      
    </Elements>
            
            
        </div>
    );
};

export default Payment;
// initial stripe and stripe-react
//set publish key
//elements
//checkoutForm
//create payment method
//