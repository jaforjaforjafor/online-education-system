import React from 'react';
import './Contact.css';
import cntc from './contact.pic';


const Contact = () => {
    return (
        <div>
            <h2>Contact Us</h2>
        <h2 className=" text-center text-danger my-5"> Contact us</h2><br />
        <h3 className='contact-second'>Our details You can contact us by phone or on social media – whatever works for you. Just pick from the options below:</h3>
        <div  className='text-center'>
            <img src={cntc} alt="" />
            <br />
        <h6 className='phone'>Phone: 01911131006</h6>
        <br /><br />
<h5 className='opening-hour'>Opening hours: <br /><br />
<h4>Mon 09.00am - 05.30pm</h4><br />
<h4>Tues 09.00am - 05.30pm</h4><br />
<h4>wed 09.00am - 05.30pm</h4><br />
<h4>thurs 09.00am - 05.30pm</h4><br />
<h4>fri 09.00am - 05.30pm</h4><br />
<h4>Sat 09.00am - 02.30pm</h4><br />
<h4 className='sun-close'>Sun closed</h4><br /><br />
<h6 className='text-dark'>Calling about a claim? We're here 24/7, all year round on: 000022222000 Social: You can catch us on Twitter or Facebook, or find your favourite platform on our social homepage.</h6>
<a>www.facebook.com/jaforiqbal</a>
<h4>Email us: <a className="email" href="">jafor365iqbal@gmail.com</a> OR <a className="email" href="">lionelsharmi10@gmail.com</a></h4>
 




.</h5>

</div>



    </div>
    );
};

export default Contact;