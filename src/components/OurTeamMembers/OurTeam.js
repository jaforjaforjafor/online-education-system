import React from 'react';
import member from "../Images/payment-1.png";
import member1 from "../Images/payment-2.jpg";

const OurTeam = () => {
    return (
        <div >
            <h1 className='text-center text-info m-5' >Our Team</h1>
        <div class="container justify-content align-items-center ">
            
  <div class="row row-cols-2  mx-5">
    <div class="col" style={{
        background:"blue",
        color:'white',
        alignItems:'center',
        justifyContent:"center"
    }}>
        <span className='fs-4'>Name:Jafor Iqbal</span>
        <img src={member} alt="" />
    </div>
    <div class="col" style={{
        background:"blue",
        color:'white',
        alignItems:'center',
        justifyContent:'center',

    }}>
    <span className='fs-4'>Name:Sharmi Mondal</span>

        <img src={member1} alt="" />
    </div>
    
   
  </div>
</div>
</div>
    );
};

export default OurTeam;