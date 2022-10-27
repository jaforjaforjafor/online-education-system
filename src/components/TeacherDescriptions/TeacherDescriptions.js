import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const TeacherDescriptions = () => {
  const history = useHistory();
    const goBack = () => {
        history.goBack()
      }
  const {id}=useParams();
  const[teacherDescriptions,setTeacherDescriptions]=useState([]);
    
    useEffect(() => {
        fetch("https://pure-oasis-80814.herokuapp.com/teachers")
            .then(res => res.json())
            .then((data) => {
                const foundTeacherDescriptions= data.filter(detail => detail._id == id)
                setTeacherDescriptions(foundTeacherDescriptions);
            })
    }, [])
    const {teachers,email,img } = teacherDescriptions[0] || {}
    return (
        <div><br /><br />
          <button className='btn btn-dark ' onClick={goBack}>Back</button>
           <div>
           
           <img src={img} class="rounded mx-auto d-block" alt="..." height='300' width='300'></img><br />
           <h2 className='text-center'> My Schedule:<span className='text-info'>{teachers}</span></h2><br />
           
           <br /><br />
          

           </div>
           <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">List</th>
      <th scope="col">Classes</th>
      <th scope="col">Days</th>
      
      <th scope="col">Slot</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Phython</td>
      <td>Sat-Mon</td>
      
      <td>9:30am-11:00am</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>C++</td>
      <td>Sun-Mon</td>
      
      <td>11:30am-1:00pm</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>C</td>
      <td>tue-Wed</td>
      
      <td>1:30pm-3:00pm</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Software Design Anaylysis</td>
      <td>Mon-Wed</td>
      
      <td>4:30pm-6:00pm</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Network Security</td>
      <td>Wed-Thu</td>
      
      <td>11:30am-1:00pm</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>C++</td>
      <td>Tue-Thu</td>
      
      <td>11:30am-1:00pm</td>
    </tr>
  </tbody>
</table><br /><br />
<h4 style={{
  'color':'blue'
}}> if you want to contact me please given me a mail in that address:<span style={{
  'color':'red'
}}><a style={{
  'color':'red'
}}
 href="https://mail.google.com">{email}</a> </span> </h4>
 <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};

export default TeacherDescriptions;