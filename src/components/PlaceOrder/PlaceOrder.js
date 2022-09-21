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
            fetch("https://pure-oasis-80814.herokuapp.com/purchase", {
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
        

        <>
            <div className="container ">
                <div className="row  justify-content-sm-center ">
                    <div className="col-sm-12 shadow round pb-3">
                        <h1 className=" text-secondary">Course Order Form</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label className="col-form-label"></label>
                                <input disabled
                                    type="text"
                                    placeholder='name'
                                    defaultValue={user.displayName}
                                    className={`form-control `}
                                    {...register("name", )}
                                    
                                />
                                
                            </div>

                            <div className="form-group">
                                <label className="col-form-label"></label>
                                <input disabled
                                    type="text"
                                    placeholder='Email'
                                    defaultValue={user.email}
                                    className={`form-control `}
                                    {...register("email", {
                                        
                                        
                                    })}
                                    
                                />
                                
                            </div>


                            <div className="form-group">
                                <label className="col-form-label"></label>
                                <input disabled 
                                    placeholder="date"
                                    defaultValue={new Date().toDateString()}
                                    className={`form-control `}
                                    {...register("date", )}
                                    
                                />

                            </div>



                            <div className="form-group">
                                <label className="col-form-label"></label>
                                <input 
                                    type="text"
                                    placeholder='Address'
                                    className={`form-control `}
                                    {...register("Address", )}
                                    
                                />
                                
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

        </>



    );
};

export default PlaceOrder;