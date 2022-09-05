import React, { useEffect, useState } from 'react';

import './MyCourses.css';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const MyCourses = () => {
    const { user } = useAuth();
    const [myCourses, setMyCourses] = useState([])
    useEffect(() => {
        const url = `https://pure-oasis-80814.herokuapp.com/purchase?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMyCourses(data));
    }, [user.email])

    const handleDelete = id => {
        const url = `https://pure-oasis-80814.herokuapp.com/purchase/${id}`;
        const isReady = window.confirm('are you sure you want to delete this order?');
        if (isReady) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Order deleted succssfully')
                        const remaining = myCourses.filter(order => order._id !== id);
                        setMyCourses(remaining);

                    }
                })
        }
    }




    return (

        <div className='tab' >

            <div >
                <table className="table table-borderless  text-white "  >
                    <thead  style={{ background: `linear-gradient(to right, #808080,#808080) ` }}>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>
                            <th scope="col">Cancel</th>
                        </tr>
                    </thead>


                    {
                        myCourses?.map((pd) =>

                            <tbody key={pd._id}>
                                <tr style={{ background: `linear-gradient(to right, #808080,#808080) ` }}>
                                    <td>{pd?.name}</td>
                                    <td>{pd?.email}</td>
                                    <td>{pd?.Address}</td>
                                    <td>{pd.payment?"paid":
                                    <Link to ={`payment/${pd._id}`}> <button>Pay</button></Link>
                                    }</td>

                                    <td>
                                        <button onClick={() => handleDelete(pd._id)} className="btn btn-danger btn-sm mx-2"><i className="fas fa-trash text-danger"><span className='delete-color-ylw'>Delete</span></i></button>

                                    </td>

                                </tr>
                            </tbody>

                        )

                    }




                </table>

            </div>

        </div>

    );
};

export default MyCourses;