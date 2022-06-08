import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import  './AddTeacher.css';

const AddTeacher = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{ console.log(data);
  axios.post('http://localhost:5000/teachers',data)
  .then(res=>{
      if(res.data.insertedId){
          alert ('added successfully');
          reset();
      }
      
  })
  }
  
    return (
        <div className='add-teacher'>
            <h2 className='text-center'>please add Teacher. </h2>
        <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register("Course", { required: true, maxLength: 20 })} 
            placeholder="Name"/> 
            <input {...register("Course", { required: true, maxLength: 20 })} 
            placeholder="email"/> 
               <textarea {...register("description" )}
              placeholder="Designation" /> 
           <input {...register("Course", { required: true, maxLength: 20 })} 
            placeholder="expert"/> 
            <input {...register("img", )}
              placeholder="Image Url" /> 
            <input type="submit" />

       </form>
        </div>
    );
};

export default AddTeacher;