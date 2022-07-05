import React from 'react';
import './Payment.css';
import bkash from '../Images/payment-1.png';
import rocket from '../Images/payment-2.jpg';
import nogod from '../Images/payment-3.webp';
import visa from '../Images/payment-4.webp';
import master from '../Images/payment-5.png';

const Payment = () => {
    return (
        <div>
            <h2 className='payment-color text-center'>Payment</h2><br /><br />
             <a href='' className="mx-1 btn btn-primary"
             ><img src={nogod} alt=""  height="100px" /></a>
             <a hRef="" className="mx-1 btn btn-primary"><img src={rocket} alt=""  height="100px"/></a>
             <a hRef="" className=" mx-1 btn btn-primary"><img src={bkash} alt=""  height="100px"/></a>
             <a hRef="" className=" mx-1 btn btn-primary"><img src={visa} alt=""  height="100px"/></a>
             <a hRef="" className=" mx-1 btn btn-primary"><img src={master} alt=""  height="100px"/></a>
            
            
            
        </div>
    );
};

export default Payment;