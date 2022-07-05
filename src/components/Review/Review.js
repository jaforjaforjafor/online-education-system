import axios from 'axios';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Review.css'
import { useForm } from "react-hook-form";


const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)

        axios.post('http://localhost:5000/ratings', data)
        
            .then(res => {

                console.log(res);
                if (res.data.insertedId) {
                    alert('Added Successfully');

                }
            })
        reset();
    }
    return (
        <div className='re' style={{ background: `linear-gradient(to right, #606c88, #3f4c6b)` }}>
            <h1 className='text-white'>Review</h1>
            <div className="login-box w-50 justify-content-center mx-auto" style={{ width: '50%' }}>
                <div className="border border d-flex justify-content-center align-items-center bg-dark  ">
                    <div className="login-form">
                        <form  onSubmit={handleSubmit(onSubmit)}>
                            <input 
                                {...register("name")}
                                defaultValue={user.displayName}
                                placeholder="name"
                                className="p-2 m-2 w-70"
                            />
                            <br />

                            <input {...register("email", { required: true })}
                                defaultValue={user.email}
                                placeholder="Email"
                                className="p-2 m-2 w-70" />
                            <br />

                            <input {...register("image", { required: true })}
                                placeholder="image"
                                className="p-2 m-2 w-70" />
                            <br />

                            <textarea {...register("Description", { required: true })}
                                placeholder="Description"
                                className="p-2 m-2 w-100" />
                            <br />


                            <input type="number" {...register("number", { required: true })} placeholder="rating"
                                defaultValue={user.number}
                                className="p-2 m-2 w-100"
                            />

                            <br />


                            <input type="submit" value="Submit" className="btn btn-info w-50 mb-2" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;