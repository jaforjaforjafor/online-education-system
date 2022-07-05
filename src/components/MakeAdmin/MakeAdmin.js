import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import admin from '../Images/picture-admin.jpg'

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const {token}=useAuth();


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization':`Bearer${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div style={{ background: `linear-gradient(to right, #606c88, #3f4c6b)` }}>


            <h3 className="text-dark fw-bolder ">ADMIN</h3>
            <form onSubmit={handleAdminSubmit}>
                <input
                    className='border border-light'
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    placeholder="Email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <button  type="submit" className=" btn-info align-items-center justify-content-center">Make Admin</button>
            </form>
            {success && <div className="alert alert-success" role="alert">
                Admin created successFully!
            </div>}

            <img className="admin-pic" src={admin} alt="" style={{ background: `linear-gradient(to right, #606c88, #3f4c6b)`,
        width:`50%`,
        height:`20%`
         }} />
        </div>
    );
};

export default MakeAdmin;