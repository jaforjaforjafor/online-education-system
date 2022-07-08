import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import  './AddCourse.css';

const AddCourse = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{ console.log(data);
  axios.post('https://pure-oasis-80814.herokuapp.com/courses',data)
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
       

            <input {...register("courses", { required: true, maxLength: 20 })} 
            placeholder="course Name"/> 
            <input type="number" {...register("price" )}
              placeholder="Price" /> <br></br>
            <textarea {...register("description" )}
              placeholder="description" /> 
            <input {...register("img", )}
              placeholder="Image Url" /> 
            <input type="submit" />

       </form>
        </div>
    );
};

export default AddCourse;