import { getAuth ,createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

    const auth = getAuth();
    const handleEmailChange= e =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }
    const handleregistration= e =>{
        e.preventDefault();
        console.log(email, password);
        if(password.length <6){
            setError('password must be at least 6 characters long');
            return;
        }
        if(!/(?:[^A-Z]*[A-Z])/.test(password)){
            setError('password must contain 2 upper case');
            return;
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const user =result.user;
            console.log(user);
            setError('');
        })
        .catch(error =>{
            setError(error.message);
        })
       

    }
    return (
        <div className='rgs-color mx-5'>
            <div>
                
            <h2 >Register:Create Account</h2>
            <form onSubmit={handleregistration}>
                <input type="text" name="" id="" placeholder='Enter your first name' required /><br /><br />
                <input type="text" name="" id="" placeholder='Enter your last name' required/><br /><br />
                <input onBlur={handleEmailChange} type="email" name="" id="" placeholder='Enter your Email' required /><br /><br />
                <input type="password" name="" id="" placeholder='Enter your Password' required/><br /><br />
                <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder='Confirm your password' required  />
                <br /><br />
                <input type="number" name="" id="" placeholder='Phone Number' required /><br /><br />
                <div className='text-danger'>{error}</div>
                <input  className='submit' type="submit" value="submit" /><br /><br />
            </form>
            <p>Already have an account? <Link to ="/login">please login</Link> </p>
            <div>-------OR--------</div>
            <button className='btn-regular'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;