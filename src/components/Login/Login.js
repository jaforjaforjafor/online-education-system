import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css";

const Login = () => {
    const [loginData,setLoginData]=useState({});
    const [error,setError]=useState({});
    const auth = getAuth();
    const { user, loginUser, isLoading, signInUsingGoogle, authError } = useAuth();
    
    
   
    const location=useLocation();
    const history =useHistory();
    const redirect_url=location.state?.from ||'/';
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    
    const handleGoogleLogin=()=>{
        signInUsingGoogle(location,history)
        .then(result =>{
            history.push(redirect_url);
        })
       
       


const processLogin=(email,password)=>{
    signInWithEmailAndPassword(auth, email, password)
    .then(result =>{
        const user =result.user;
        console.log(user);
    })
    .catch((error) => {
    setError( error.message);
      });
}

  
  
  
    }
    return (
        <div className='login-form'>
            
            <div >
            <h2 className='login-please'>Please Login</h2>
            <form onSubmit={handleLoginSubmit}>

                <input onBlur={handleOnChange} type="email" name="" id="" placeholder='Enter Your Email ' /><br /><br />
                <input type="password" name="" id="" placeholder='Enter Your password ' />
                <br /><br />
                <input  className="submit-login" type="submit" value="submit" />
                {user?.email && <div className="alert alert-success" role="alert">
                    User created successFully!
                </div>}
                {authError && <div className="alert alert-danger" role="alert">
                    {authError}
                </div>}
            </form>
            <p>New user ? <Link to="/register">create account</Link></p>
            <div>----------Or---------</div>
            <button 
            onClick={handleGoogleLogin}
            className='btn-regular'
            >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;