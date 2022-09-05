import React from 'react';
import member from "../Images/payment-1.png";
import member1 from "../Images/payment-2.jpg";

const OurTeam = () => {
    return (
        <div>
            <h2 className='text-center'>our team</h2>
        <div class="container justify-content align-items-center">
            
  <div class="row row-cols-2">
    <div class="col">
        <h2>name:Jafor iqbal</h2>
        <img src={member} alt="" />
    </div>
    <div class="col">
        <h2>name:Sharmi Mondal</h2>
        <img src={member1} alt="" />
    </div>
    
   
  </div>
</div>
</div>
    );
};

export default OurTeam;