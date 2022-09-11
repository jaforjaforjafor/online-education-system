import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success] = useState(false);
    const {token}=useAuth();


    const handleAdminSubmit = e => {
        const user = { email };


        fetch('https://pure-oasis-80814.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                // if (data.modifiedCount) {
                //     console.log(data);
                //     
                //     setSuccess(true);
                // }
                
            });

        e.preventDefault()
        setEmail('');
    
        
    }
    return (
        <>
        <div  className='text-center'style={{ background: `linear-gradient(to right, #606c88, #3f4c6b)` }}>


            <h3 className="text-dark fw-bolder ">ADMIN</h3>
            <form onSubmit={handleAdminSubmit}>
                <input
                    className='border border-light'
                    sx={{ width: '100%' }}
                    label="Email"
                    type="email"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    variant="standard" 
                    />
                <button  type="submit" className=" btn-info align-items-center justify-content-center">Make Admin</button>
            </form>
            {success && <div className="alert alert-success" role="alert">
                Admin created successFully!
            </div>}

           
        </div><br />
       
        </>
    );
};

export default MakeAdmin;