import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className='rgs-color'>
            <div>
            <h2 >Register:Create Account</h2>
            <form onSubmit="">
                <input type="text" name="" id="" placeholder='Enter your first name' /><br /><br />
                <input type="text" name="" id="" placeholder='Enter your last name' /><br /><br />
                <input type="email" name="" id="" placeholder='Enter your Email' /><br /><br />
                <input type="password" name="" id="" placeholder='Enter your Password' /><br /><br />
                <input type="password" name="" id="" placeholder='Confirm your password' /><br /><br />
                <input type="number" name="" id="" placeholder='Phone Number' /><br /><br />
                <input  className='submit' type="submit" value="submit" /><br /><br />
            </form>
            <p>Already have an account? <Link to ="/login"></Link> </p>
            <div>-------OR--------</div>
            <button className='btn-regular'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;