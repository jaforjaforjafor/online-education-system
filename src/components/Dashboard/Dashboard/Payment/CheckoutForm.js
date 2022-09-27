import React from 'react';
import { CardElement, useStripe,useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import   './CheckoutForm.css';
import { useEffect } from 'react';



const CheckoutForm = ({payment}) => {
    const stripe=useStripe();
    const elements=useElements();
    const [error,setError]=useState('');
    const [clientSecret,setClientSecret]=useState('');
    const {price}=payment;
    useEffect( ()=>{
        fetch(`https://pure-oasis-80814.herokuapp.com/create-payment-intent`,{
          method:'POST',
          header:{
            'content-type':'application/json',
          },
          body:JSON.stringify({price})
        })
        .then(res =>res.json())
        .then(data=>{
          if(data?.clientSecret){
            setClientSecret(data.clientSecret);
          }
        });

     },[price])
    const handleSubmit=async  (e) =>{
            e.preventDefault();
        if (!stripe || !elements) {
            return;
          }
          const card = elements.getElement(CardElement);
          if (card === null) {
            return;
          }
          const {error,paymentMethod}=await stripe.createPaymentMethod({
            type:'card',
            card
          });
          if(error){
            setError(error.message);
          }
          else{
            setError('');
            console.log(paymentMethod);
          }
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <div className='col text-center '>
      <button style={{
        
        color:"blue",
        borderRadius:"10px ",
        padding:"5px",
        fontSize:"30px"
      }} type="submit" disabled={!stripe || !clientSecret}> PAY </button>

      </div>
    </form>
    {error && <p style={{color:'red'}}>{error}</p>
    }
        </div>
    );
};

export default CheckoutForm;