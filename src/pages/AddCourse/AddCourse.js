import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import  './AddCourse.css';

const AddCourse = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{ console.log(data);
  axios.post('http://localhost:5000/courses',data)
  .then(res=>{
      if(res.data.insertedId){
          alert ('added successfully');
          reset();
      }
      
  })
  }
  
    return (
        <div className='add-course'>
            <h2 className='text-center'>please add a course. </h2>
        <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register("Course", { required: true, maxLength: 20 })} 
            placeholder="Name"/> 
            <input type="number" {...register("price" )}
              placeholder="Price" /> <br></br>
            <textarea {...register("description" )}
              placeholder="Description" /> 
            <input {...register("img", )}
              placeholder="Image Url" /> 
            <input type="submit" />

       </form>
        </div>
    );
};

export default AddCourse;