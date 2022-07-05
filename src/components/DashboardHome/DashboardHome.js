import React from 'react';
import { Link } from 'react-router-dom';
import './DashboardHome.css'

const DashboardHome = () => {
    return (
        <div>
            <div>
                <section className="showcase">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h2 className=" fw-bolder display-4 text-white w-100 mt-5">Welcome to Online Education Dashboard</h2>

                                <Link to="/home" class="btn btn-light">Go to Home</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DashboardHome;