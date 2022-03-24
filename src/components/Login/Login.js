import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css";

const Login = () => {
    const{signInUsingGoogle}=useAuth();
    const location=useLocation();
    const history =useHistory();
    const redirect_url=location.state?.from ||'/';
    const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_url);
        })
    }
    return (
        <div className='login-form'>
            <div >
            <h2 className='login-please'>Please Login</h2>
            <form onSubmit={handleGoogleLogin}>
                <input type="email" name="" id="" placeholder='Enter Your Email ' /><br /><br />
                <input type="password" name="" id="" placeholder='Enter Your password ' />
                <br /><br />
                <input className="submit-login" type="submit" value="submit" />
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