import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PlaceOrder from '../../PlaceOrder/PlaceOrder';
import icon1 from '../../Icons/clock.svg';
import icon2 from '../../Icons/marker.svg';
import './Purchase.css';
import FullCourseDetails from '../../FullCourseDetail/FullCourseDetails';

const Purchase = () => {
    
    const {id}=useParams();
    const[purchase,setPurchase]=useState([]);
    
    useEffect(() => {
        fetch("https://pure-oasis-80814.herokuapp.com/courses")
            .then(res => res.json())
            .then((data) => {
                const foundPurchase= data.filter(detail => detail._id == id)
                setPurchase(foundPurchase);
            })
    }, [])
    
  
    const { courses, description, img, price } = purchase[0] || {}
    return (
      <>
        <div className="container-fluid  d-flex ms-5">
        <div className='row' >
            <div className=" ">
                <div className="card h-70 w-100  shadow-lg">
                    <img src={img} className="card-img-top" height="500" width="250" alt='' />
                    <div className="card-body">

                        <p className="text-nowrap  fs-2"><strong >Service:{courses}</strong></p>
                        <p className="card-text fs-2"> <strong>Description:</strong> {description}</p>

                        <p className="text-nowrap fs-2"><strong >Price:</strong>{price}</p>

                        

 
                        <div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-dark fs-4 text-center" type="button">
           Course Outline
        </button><br /><br />
      <li>Introduction of {courses}</li><br />
      <li>Learn What is {courses}</li><br />
      <li>life-cycle of  {courses}</li><br />
      <li>Advance of {courses}</li><br />
      </h2>
    </div>

    <div id="collapseOne" class="collapse show " aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body  ">

      <div class="container">
  <div class="row gap-4">
    <div class=" bg-secondary fs-5"><br />
      <img src={icon1} alt="" height='50' />
     <p>3.5 Hours Of video</p>
    </div>
    <div class="bg-primary  fs-5"><br />
      <img src={icon2} alt="" height='50' />
    <p>Certificate of completion</p>
    </div>
    
  </div>
</div>
        

        
        
       <p className='fs-6 text-center'> good and skillful course {courses}.If you want to learn many more thing in your valuable life and want to gain your knowledge about the {courses}.It will develop your skill and experience.
        </p>
        <Link to ="/courseDetails"
       >
        <button className="btn btn-dark m-2 fs-7"><img  alt="" width="25" />
                 Course of the teachers</button></Link>
                 <Link to ="/fullcoursedetails"
       >
        <button className="btn btn-dark"><img  alt="" width="25" 
       
        />
                 Show  full Course Overview</button></Link>
                 
         
      </div>
    </div>
  </div>
  
</div>
                      
                    </div>
                    

                  
                </div>
                
            </div>
            <div className=" ">
                <PlaceOrder courses={courses}
                price={price}
                image={img}></PlaceOrder>
            </div>
            
        </div>
        
       
    </div>
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Introduction of the {courses}
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body fs-5">
        <strong>This is the {courses}.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>{courses}.</code>, though the transition does limit overflow.
      </div>
      <iframe  width="1080" height="315" src="https://www.youtube.com/embed/X3paOmcrTjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
  
 
</div>
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        {courses} life-cycle
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body fs-5">
        <strong>This is the life cycle of {courses}.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>{courses}.</code>, though the transition does limit overflow.

      </div>
      <iframe  width="1080" height="315" src="https://www.youtube.com/embed/TjnQzF2M-iE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/t8JRidxZCXU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  
 
</div>
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        advance of {courses}
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body fs-5">
        <strong>This is the advance of {courses}.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>{courses}.</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
 
</div>
    </>
    );
};

export default Purchase;