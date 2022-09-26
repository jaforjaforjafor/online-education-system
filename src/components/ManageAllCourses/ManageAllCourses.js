import React, { useEffect, useState } from 'react';

const ManageAllCourses = () => {
    const [status, setStatus] = useState([]);
    const [deleteCourses, setDeleteCourses] = useState([])

    const [manageCourses, setManageCourses] = useState([]);
    useEffect(() => {
        fetch('https://pure-oasis-80814.herokuapp.com/manageAllOrders')
            .then(res => res.json())
            .then(data => setManageCourses(data))
    }, [])
    const handleStatus = (_id, pd) => {
        pd.status = "Enrolled";

        fetch(`https://pure-oasis-80814.herokuapp.com/manageAllOrders/${_id}`, {
            method: 'PUT',
            headers:
                { "content-type": "application/json" },
            body: JSON.stringify(pd),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.modifiedCount) {
                    setStatus(false);
                }
            });
    }
    const handleDelete = id => {
        const url = `https://pure-oasis-80814.herokuapp.com/manageAllOrders/${id}`;
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
                        const remaining = deleteCourses.filter(order => order._id !== id);
                        setDeleteCourses(remaining);

                    }
                })
        }
    }



    return (
        <div style={{ background: `linear-gradient(to right, #606c88, #3f4c6b)` }}>
            
                <div className="container mb-4 ">
                    
                    <table className="table table-borderless text-white ms-4 me-2"  >
                        <thead>
                            <tr className='border'>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Course</th>
                                <th scope="col">Price</th>
                                <th scope="col">Permission</th>
                                <th scope="col">action</th>
                            </tr>
                        </thead>


                        {
                            manageCourses?.map((pd) =>

                                <tbody key={pd._id}>
                                    <tr>
                                        <td>{pd?.name}</td>
                                        <td>{pd?.email}</td>
                                        <td>{pd?.Address}</td>
                                        <td>{pd?.course}</td>
                                        <td>{pd?.price}</td>
                                       


                                        <td>
                                            <button onClick={() => handleStatus(pd._id, pd)} className="btn btn-success btn-sm mx-2">
                                                {pd?.status}</button>

                                        </td>
                                        <td>
                                        <button onClick={() => handleDelete(pd._id, pd)} className="btn btn-danger btn-sm mx-2"><i className="fas fa-trash text-danger"><span className='delete-color-ylw'>Delete</span></i></button>

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

export default ManageAllCourses;