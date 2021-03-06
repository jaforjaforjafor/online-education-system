import React, { useState,  } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Register = () => {
    const [loginData, setLoginData] = useState({});
    
    
    

    const history = useHistory();
    const { user, registerUser, isLoading,signInUsingGoogle, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            
            return;
        }
        if(loginData.password.length <6){
            alert('password must be at least 6 characters long');
            return;
            
        }
        if(!/(?:[^A-Z]*[A-Z])/.test(loginData.password)){
            alert('password must contain 2 upper case');
            return;
            
        }
        
        
        
        registerUser(loginData.email, loginData.password, loginData.name,loginData.location,history);
        e.preventDefault();
    }
    const handleGoogleLogin=()=>{
        signInUsingGoogle(loginData.location,history)}
    return (
        <>
        <h3 className="mt-5 text-center text-info fw-bolder " style={{ background: `linear-gradient(to right, #f18973, #182848)` }}>Register Form</h3>
        <div className="container mb-4 bg-dark w-50" style={{ background: `linear-gradient(to right, #4b6cb7, #182848)` }}>
            
            {
                !isLoading && <form onSubmit={handleLoginSubmit} ><br />
                    <input className="mb-4 "
                        style={{ width: '100%' }}
                        label="Your Name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        onBlur={handleOnBlur}
                        required
                    />
                    <br />
                    <input
                        style={{ width: '100%' }}
                        label="Your Email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        onBlur={handleOnBlur}
                        required

                        />
                    <br />
                    <input className="mt-4"
                        style={{ width: '100%' }}
                        label="Your Password"
                        type="password"
                        name="password"
                        placeholder="Your Password"
                        onBlur={handleOnBlur} />
                          
                                        
                    <br />

                    <input className="mt-4"
                        style={{ width: '100%' }}
                        label="ReType Your Password"
                        type="password"
                        name="password2"
                        placeholder="Re-type Password"
                        onBlur={handleOnBlur} />
                    <br />
                    <button className="btn btn-info mt-2 mb-2" type="submit">Register</button>


                    <p className="text-white fw-bolder">Already have a account? Please <Link className="text-decoration-none text-info" to="/login">login</Link></p>
                    <div>----------Or---------</div>
                    <button 
                         onClick={handleGoogleLogin}
                         className='btn-regular reg-google'
                         >Google Sign In</button>
                        <br />


                </form>}
                <br />
                
            {isLoading && <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
            {user?.email && <div className="alert alert-success" role="alert">
                User created successFully!
                
            </div>}
            {authError && <div className="alert alert-danger" role="alert">
                {authError}
            </div>}
            
           

        </div>
        
       
        </>
    );
};
//register 7min 
export default Register;