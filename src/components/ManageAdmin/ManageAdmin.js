import React, { useEffect, useState } from 'react';

const ManageAdmin = () => {
    const [manageAdmin, setManageAdmin] = useState([])
    useEffect(() => {
        fetch(`https://pure-oasis-80814.herokuapp.com/manageTeachers`)
            .then(res => res.json())
            .then(data => setManageAdmin(data))
    }, [])

    const handleRemove = id => {
        const url = `https://pure-oasis-80814.herokuapp.com/manageTeachers/${id}`;
        const isReady = window.confirm('are you sure you want to delete this Teacher?');
        if (isReady) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Teacher is  deleted succssfully')
                        const remaining = manageAdmin.filter(order => order._id !== id);
                        setManageAdmin(remaining);

                    }
                })
        }
    }

    return (
        <div style={{ background: `linear-gradient(to right, #606c88, #3f4c6b)` }}>
           
            <div className="container-fluid mb-4 ">
                <table className="table table-borderless text-white "  >
                    <thead>
                        <tr className='border '>
                            <th  scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                            
                        </tr>
                    </thead>


                    {
                        manageAdmin?.map((pd) =>

                            <tbody key={pd._id}>
                                <tr>
                                    <td>{pd?.email}</td>
                                    <td>{pd?.expert}</td>

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

export default ManageAdmin;