import React, { useEffect, useState } from 'react';

const ManageCourses = () => {
    const [manageCourses, setManageCourses] = useState([])
    useEffect(() => {
        fetch(`https://pure-oasis-80814.herokuapp.com/manageCourses`)
            .then(res => res.json())
            .then(data => setManageCourses(data))
    }, [])

    const handleRemove = id => {
        const url = `https://pure-oasis-80814.herokuapp.com/manageCourses/${id}`;
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
                        const remaining = manageCourses.filter(order => order._id !== id);
                        setManageCourses(remaining);

                    }
                })
        }
    }

    return (
        <div style={{ background: `linear-gradient(to right, #606c88, #3f4c6b)` }}>
           
            <div className="container mb-4 ">
                <table className="table table-borderless text-white "  >
                    <thead>
                        <tr className='border '>
                            <th  scope="col">Courses</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                            
                        </tr>
                    </thead>


                    {
                        manageCourses?.map((pd) =>

                            <tbody key={pd._id}>
                                <tr>
                                    <td>{pd?.courses}</td>
                                    <td>{pd?.price}</td>

                                    <td>

                                        <button onClick={() => handleRemove(pd._id)} className="btn btn-danger btn-sm text-white fs-8"><i className="fas fa-trash text-info"></i> Delete</button>
                                        

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

export default ManageCourses;