import React from 'react';
import './Dashboard.css'
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
 import MyCourses from '../../MyCourses/MyCourses';
 import Review from '../../Review/Review';
 import ManageAllCourses from '../../ManageAllCourses/ManageAllCourses';
import AddCourse from '../../../pages/AddCourse/AddCourse';
import AddTeacher from '../../../pages/AddTeacher/AddTeacher';
import DashboardHome from '../../DashboardHome/DashboardHome';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import AdminRoute from '../../AdminRoute/AdminRoute';
 import ManageCourses from '../../ManageCourses/ManageCourses';
import ManageTeachers from '../../ManageTeachers.js/ManageTeachers';
import Payment from './Payment/Payment'
import ManageAdmin from '../../ManageAdmin/ManageAdmin';
import Users from './Users';




const Dashboard = () => {
    let { path, url } = useRouteMatch();
     const { admin } = useAuth();
    return (
        
          <div>
            <div className="row"  style={{ background: `linear-gradient(to right, #ffd194,#70e1f5) ` }}>
                <div className="col-md-2 col-sm-4 sidebar1">
          
              
                <ul className='list'>
                {
                                !admin &&
                                 <li>
                                     <h2 >DashBoard</h2>
                                     <button className=" btn-light rounded-pill border-0 mt-2 w-50 fs-3">
             <Link to={`${url}/purchase`} className="nav-link text-black fs-4">My Purchase</Link> </button> <br />
            <button className=" btn-light rounded-pill border-0 mt-2 w-50 fs-3">
             <Link to={`${url}/review`} className="nav-link text-black">Request View</Link> </button> <br />

                                 </li>
                             }
                             </ul>

                  
           <ul className='list'>
            {admin && <div className='back' >
                <li ><br />

              {/* <button className=" btn-light rounded-pill border-0 mt-2 w-50 fs-3"> 
                <Link to={`${url}/users`} className="nav-link text-black text-nowrap text-center"> All Users </Link>
             </button> <br /> */}

              <button className=" btn-light rounded-pill border-0 mt-2 w-50 fs-3"> 
                <Link to={`${url}/addcourse`} className="nav-link text-black text-nowrap text-center">Add Course </Link>
             </button> <br />
          
              <button className=" btn-light rounded-pill border-0 mt-2 w-50 fs-3"> 
                <Link to={`${url}/makeAdmin`} className="nav-link text-black text-nowrap text-center"> Make Admin</Link> 
               </button><br />
         < button className=" btn-light rounded-pill border-0 mt-2 w-50 fs-3">
           <Link to={`${url}/addteacher`} className="nav-link text-black text-nowrap text-center">Add Teacher</Link> 
         </button><br />

          <button className=" btn-light rounded-pill border-0 mt-2 w-50 fs-3">
             <Link to={`${url}/manageAllOrders`} className="nav-link text-black text-nowrap text-center">Manage All purchase</Link>
         </button><br />
                                    

          <button className=" btn-light rounded-pill border-0 mt-2 w-50 fs-3">
                <Link to={`${url}/manageCourses`} className="nav-link text-black text-nowrap ">Manage Courses</Link>
          </button><br />
          <button className=" btn-light rounded-pill border-0 mt-2 w-50 fs-3">
                <Link to={`${url}/manageTeachers`} className="nav-link text-black text-nowrap ">Manage Teachers</Link>
          </button><br />
          <br /><br ></br>
                                    </li>
            </div> }
                </ul>
                </div>
            

             
             
                <div  className="col-md-10 col-sm-8 main-content  ">
        
        <Switch>
        <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
        <Route path={`${path}/purchase`}>
                 <MyCourses></MyCourses>
             </Route> 
        <Route path={`${path}/payment/:purchaseId`}>
                 <Payment></Payment>
             </Route> 
             <Route path={`${path}/review`}>
                 <Review></Review>
             </Route>
          
          <AdminRoute path={`${path}/users`}>
                     <Users></Users>
                 </AdminRoute>
          <AdminRoute path={`${path}/manageAllOrders`}>
                     <ManageAllCourses></ManageAllCourses>
                 </AdminRoute>
          <AdminRoute path={`${path}/manageAdmin`}>
                     <ManageAdmin></ManageAdmin>
                 </AdminRoute>
          <AdminRoute exact path={`${path}/makeAdmin`}>
        <MakeAdmin></MakeAdmin>
               </AdminRoute>
               
          <AdminRoute exact path={`${path}/addteacher`}>
        <AddTeacher></AddTeacher>
               </AdminRoute>
          <AdminRoute exact path={`${path}/addcourse`}>
        <AddCourse></AddCourse>
               </AdminRoute>
               <AdminRoute path={`${path}/manageCourses`}>
                    <ManageCourses></ManageCourses>
                </AdminRoute>
               <AdminRoute path={`${path}/manageTeachers`}>
                    <ManageTeachers></ManageTeachers>
                </AdminRoute>
               </Switch>

               </div>
               </div>
               </div>
               
               

        
    );
};

export default Dashboard;