import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'
import brandicon from '../Images/download.jpg'


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='header'>

            <nav className="navbar navbar-expand-sm navbar-dark navbar-custom" >
                <div className="container-fluid bg-dark header">
                    <NavLink to="/" className="navbar-brand h5 text-white fs-4">Online Education <img src={brandicon} alt="" width="50" /> </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link text-white fs-4">Home</NavLink>
                            </li>
                            
                            <li className="nav-item fs-4">
                                <NavLink to="/teacher's Profile" className="nav-link text-white">Teacher's Profile </NavLink>
                            </li>
                            <li className="nav-item fs-4">
                                <NavLink to="/courses" className="nav-link text-white">Our Courses</NavLink>
                            </li>
                           
                            <li className="nav-item">
                                <span className="nav-link text-white">{user.email && <li className="nav-item text-warning">
                                    <p className='fs-4'>Welcome {user.displayName}</p>
                                </li>}</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link text-white">{user.email && <li className="nav-item">
                                    <img className='user' src={user.photoURL} alt="" />
                                </li>}</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link text-white">{user.email && <li className="nav-item">
                                    
                                <NavLink to="/dashboard" className="nav-link text-info fs-5 text-decoration-underline"> Dashboard </NavLink>
                                </li>}</span>
                            </li>
                            <li className="nav-item">
                                <li className="nav-link text-white">{
                                    user.email ? <li>
                                        <li className="nav-item">
                                            <button onClick={logOut} type="button" className="btn btn-sm btn-light fs-5">Logout</button>
                                        </li>
                                    </li>
                                        :
                                        <NavLink to="/login" className="nav-item">
                                            <button type="button" className="btn btn-sm btn-light fs-4">Login</button>
                                        </NavLink>

                                }</li>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;