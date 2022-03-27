import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Header.css";

const Header = () => {
    const{user,logOut}=useAuth()
    return (
        <div className='header'>
             
             
             <nav className="navtool" >
             
            <NavLink to ="/home">Home</NavLink>
            <NavLink to ="/teacher's Profile">Teacher's Profile</NavLink>
            <NavLink to ="/payment">Payment</NavLink>
            <NavLink to ="/contact">Contact</NavLink>
            {/* <NavLink to ="/feedback">Feedback</NavLink> */}
            <NavLink to ="/ourcourses">Our Courses</NavLink>
            { user.email &&<span style={{color: "yellow"}}>Hello {user.displayName} </span>}
           { 
           user.email ?
           <button onClick={logOut}> Log Out</button>
           :
            <NavLink to ="/login">Login</NavLink>
           }
           <NavLink to ="/admin">Admin</NavLink>
           
            
            </nav>
        </div>
    );
};

export default Header;