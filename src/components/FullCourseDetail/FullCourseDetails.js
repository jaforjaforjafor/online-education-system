import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const FullCourseDetails = () => {
    const history = useHistory();
    const goBack = () => {
        history.goBack()
      }

    return (
        <div className='d-flex '>
            <div className='m-5'>
            <h2 className='text-center bg-dark text-light '>Details and curriculum</h2>
            <h3>
            What you'll learn
<li>Introduction to what is  and its basic concepts</li>
<li>Learn what is  and how it works behind the scenes</li>
<li>Learn what are the stateful and stateless  and when to use them</li>
<li>Working with function based and class based components</li>
<li>Working with  Modules, importing and exporting the modules</li>
<li>Learn in detail about how the render method works</li>
<li>  lifecycle and different lifecycle methods</li>
<li>Creating dynamic way  with help of re-usable components</li>
<li>Creating a proper working structure for a project from scratch which will help maintaining the project for long term.</li>
            </h3>
        </div>
        
        <Link to ="/courses"
       >
        <button onClick={goBack} className="btn btn-dark m-5"><img  alt="" width="25" />
                 X</button></Link>
        </div>
    );
};

export default FullCourseDetails;