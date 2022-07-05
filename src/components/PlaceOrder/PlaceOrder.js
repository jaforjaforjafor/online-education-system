import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'

const PlaceOrder = () => {
    const { user } = useAuth();

    const { register, trigger, handleSubmit, reset, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        // my addon
        data.status = 'Enroll now';
        console.log(data)

        const isReady = window.confirm('are you sure to add this order?');
        if (isReady) {
            fetch("http://localhost:5000/purchase", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data),
            })

                .then((res) => res.json())
                .then((result) => {
                    if (result.acknowledged) {
                        alert('order added successfully');

                    }
                });
            reset();
        }
    };
    return (
        

        <div>
            <div className="container pt-5">
                <div className="row  justify-content-sm-center pt-5">
                    <div className="col-sm-12 shadow round pb-3">
                        <h1 className="text-center pt-3 text-secondary">Course Order Form</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label className="col-form-label"></label>
                                <input
                                    type="text"
                                    placeholder='name'
                                    defaultValue={user.displayName}
                                    className={`form-control ${errors.name && "invalid"}`}
                                    {...register("name", { required: "Name is Required" })}
                                    onKeyUp={() => {
                                        trigger("name");
                                    }}
                                />
                                {errors.name && (
                                    <small className="text-danger">{errors.name.message}</small>
                                )}
                            </div>

                            <div className="form-group">
                                <label className="col-form-label"></label>
                                <input
                                    type="text"
                                    placeholder='Email'
                                    defaultValue={user.email}
                                    className={`form-control ${errors.email && "invalid"}`}
                                    {...register("email", {
                                        required: "Email is Required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address",
                                        }
                                    })}
                                    onKeyUp={() => {
                                        trigger("email");
                                    }}
                                />
                                {errors.email && (
                                    <small className="text-danger">{errors.email.message}</small>
                                )}
                            </div>


                            <div className="form-group">
                                <label className="col-form-label"></label>
                                <input
                                    placeholder="date"
                                    defaultValue={new Date().toDateString()}
                                    className={`form-control ${errors.name && "invalid"}`}
                                    {...register("date", { required: "Name is Required" })}
                                    onKeyUp={() => {
                                        trigger("date");
                                    }}
                                />

                            </div>



                            <div className="form-group">
                                <label className="col-form-label"></label>
                                <input
                                    type="text"
                                    placeholder='Address'
                                    className={`form-control ${errors.name && "invalid"}`}
                                    {...register("Address", { required: "Address is Required" })}
                                    onKeyUp={() => {
                                        trigger("Address");
                                    }}
                                />
                                {errors.name && (
                                    <small className="text-danger">{errors.name.message}</small>
                                )}
                            </div>

                            <div className="form-group">
                                <label className="col-form-label"></label>
                                <input
                                    type="text"
                                    placeholder='phone'
                                    className={`form-control ${errors.phone && "invalid"}`}
                                    {...register("number", {
                                        required: "Phone is Required",
                                        pattern: {
                                            value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                            message: "Invalid phone no",
                                        },
                                    })}
                                    onKeyUp={() => {
                                        trigger("number");
                                    }}
                                />
                                {errors.phone && (
                                    <small className="text-danger">{errors.phone.message}</small>
                                )}
                            </div>

                            <input
                                type="submit"
                                className="btn btn-info my-3"
                                value="Order Now"
                            />
                        </form>
                    </div>
                </div>
            </div>

        </div>



    );
};

export default PlaceOrder;