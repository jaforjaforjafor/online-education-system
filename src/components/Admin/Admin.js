import React from 'react';
import './Admin.css';

const Admin = () => {
    return (
        <div className='text-center'>
            <h2 className='login-admin'>Admin Login</h2>
            <form onSubmit="">
                <input type="email" name="" id="" placeholder='Enter Your Email ' /><br /><br />
                <input type="password" name="" id="" placeholder='Enter Your password ' />
                <br /><br />
                <input className='submit-login' type="submit" value="submit" />
                </form>
        </div>
    );
};

export default Admin;