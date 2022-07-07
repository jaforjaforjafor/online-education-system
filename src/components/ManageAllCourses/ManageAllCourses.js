import React, { useEffect, useState } from 'react';

const ManageAllCourses = () => {
    const [status, setStatus] = useState([])
    const [manageCourses, setManageCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/manageAllOrders')
            .then(res => res.json())
            .then(data => setManageCourses(data))
    }, [])
    const handleStatus = (_id, pd) => {
        pd.status = "Enrolled";

        fetch(`http://localhost:5000/manageAllOrders/${_id}`, {
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


    return (
        <div style={{ background: `linear-gradient(to right, #606c88, #3f4c6b)` }}>
            
                <div className="container mb-4 ">
                    
                    <table className="table table-borderless text-white ms-4 me-2"  >
                        <thead>
                            <tr className='border'>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th   scope="col">Action</th>
                            </tr>
                        </thead>


                        {
                            manageCourses?.map((pd) =>

                                <tbody key={pd._id}>
                                    <tr>
                                        <td>{pd?.name}</td>
                                        <td>{pd?.email}</td>
                                        <td>{pd?.Address}</td>

                                        <td>
                                            <button onClick={() => handleStatus(pd._id, pd)} className="btn btn-success btn-sm mx-2">
                                                {pd?.status}</button>

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