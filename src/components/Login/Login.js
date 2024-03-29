import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css";
import loginRightPic from '../Images/education pic.jpg';

const Login = () => {
    const [loginData,setLoginData]=useState({});
    

   
      
    
    
    
    const { user, loginUser, isLoading, signInWithGoogle, authError,verifyPass} = useAuth();
    
    
   
    const location=useLocation();
    const history =useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handleLoginSubmit = e => {
         loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };
    
    
        

    const handleGoogleLogin=()=>{
        signInWithGoogle(location,history);


  
  
  
    };
    const handleResetPass=()=>{
        verifyPass();
        
    }
   
    
    return (
        <div className="container mt-4 bg-dark w-50" style={{ background: `linear-gradient(to right, #e6dada, #274046)` }}>
            {isLoading && <div className="spinner-border text-info text-center" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
            
        <div className='login-form'>
            
            
            <div >
            <h2 className='login-please'>Please Login</h2>
            <form onSubmit={handleLoginSubmit}>

                <input  type="email" name="email" onChange={handleOnChange} id="" placeholder='Enter Your Email ' /><br /><br />
                <input type="password" name="password" onChange={handleOnChange} id="" placeholder='Enter Your password ' />
                <br /><br />
                <input  className="submit-login" type="submit" value="submit" /><br /><br />
                <button type='button' onClick={handleResetPass} className='btn btn-secondary btn-sm '>Reset Password</button>
                {user?.email && <div className="alert alert-success" role="alert">
                    
                user  is login </div>}
                
               
                    {authError}
                
            </form>
            <p>New user ? <Link to="/register">create account</Link></p>
            <div>----------Or---------</div>
            <button 
            onClick={handleGoogleLogin}
            className='btn-regular'
            >Google Sign In</button>
            <br /><br />
          
            </div>
            <br /><br />
           
        </div>
        <div>
           <img src={loginRightPic} alt=""   />
           </div>
        </div>
    );
};

export default Login;