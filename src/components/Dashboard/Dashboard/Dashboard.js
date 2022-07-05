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



const Dashboard = () => {
    let { path, url } = useRouteMatch();
     const { admin } = useAuth();
    return (
        <div>
          
              <li>
                <ul>
                  
            <button className=" btn-light rounded-pill border-0 mt-2 w-50">
             <Link to={`${url}/purchase`} className="nav-link text-black">my Purchase</Link> </button> <br />
            <button className=" btn-light rounded-pill border-0 mt-2 w-50">
             <Link to={`${url}/review`} className="nav-link text-black">Review</Link> </button> <br />
            {admin && <div>
              <button className=" btn-light rounded-pill border-0 mt-2 w-50"> 
              <Link to={`${url}/addcourse`} className="nav-link text-black">Add Course </Link></button> <br />
          
              <button className=" btn-light rounded-pill border-0 mt-2 w-50"> 
          <Link to={`${url}/makeAdmin`} className="nav-link text-black"> Make Admin</Link> </button><br />
         < button className=" btn-light rounded-pill border-0 mt-2 w-50">
          <Link to={`${url}/addteacher`} className="nav-link text-black">Add Teacher</Link> </button><br />
          <button className=" btn-light rounded-pill border-0 mt-2 w-75">
                                        <Link to={`${url}/manageAllOrders`} className="nav-link text-black text-nowrap text-center">Manage All purchase</Link>
                                    </button>
                                    <br />

                                    <button className=" btn-light rounded-pill border-0 mt-2 w-75">
                                        <Link to={`${url}/manageCourses`} className="nav-link text-black text-nowrap ">Manage Courses</Link>
                                    </button>
            </div> }
                </ul>
            

             </li>
             
        
        <Switch>
        <Route path={`${path}/purchase`}>
                 <MyCourses></MyCourses>
             </Route> 
             <Route path={`${path}/review`}>
                 <Review></Review>
             </Route>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <AdminRoute path={`${path}/manageAllOrders`}>
                     <ManageAllCourses></ManageAllCourses>
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
               </Switch>
               

        </div>
        // <div style={{ background: `linear-gradient(to right, #92a8d1, #f18973) ` }}>
        //     <div className="row">
        //         <div className="col-md-2 col-sm-4 sidebar1">

        //             <br />
        //             <div className="left-navigation">
        //                 <ul className="list">
        //                     {
        //                         !admin &&
        //                         <li>
        //                             <h2 >DashBoard</h2>

        //                             {/* <button className=" btn-light rounded-pill border-0 mt-2 w-50">
        //                                 <Link to={`${url}/payment`} className="nav-link text-black">Payment</Link>
        //                             </button> */}

        //                             <br />
        //                             <button className=" btn-light rounded-pill border-0 mt-2 w-50">
        //                                 <Link to={`${url}/seecourse`} className="nav-link text-black">My Courses</Link></button>

        //                             <br />
        //                             <button className=" btn-light rounded-pill border-0 mt-2 w-50">
        //                                 <Link to={`${url}/review`} className="nav-link text-black">Review</Link>
        //                             </button>
        //                         </li>
        //                     }





        //                 </ul>

        //                 <ul className="list">
        //                     {
        //                         admin &&
        //                         <li>
        //                             <h2>DashBoard</h2>
        //                             <button className=" btn-light rounded-pill border-0 mt-2 w-75">
        //                                 <Link to={`${url}/makeadmin`} className="nav-link text-black text-nowrap text-center">Make Admin</Link>
        //                             </button>

        //                             <br />

        //                             <button className=" btn-light rounded-pill border-0 mt-2 w-75">
        //                                 <Link to={`${url}/addcourse`} className="nav-link text-black text-nowrap text-center">Add a Course</Link>
        //                             </button>
        //                             <button className=" btn-light rounded-pill border-0 mt-2 w-75">
        //                                 <Link to={`${url}/addteacher`} className="nav-link text-black text-nowrap text-center">Add  Teacher</Link>
        //                             </button>

        //                             <br />

        //                             <button className=" btn-light rounded-pill border-0 mt-2 w-75">
        //                                 <Link to={`${url}/makeAdmin`} className="nav-link text-black text-nowrap ">Make Admin</Link>
        //                             </button>


        //                         </li>

        //                     }

        //                 </ul>


        //             </div>
        //         </div>

        //         <div className="col-md-10 col-sm-8 main-content">
        //             <Switch>
                        
        //              <Route path={`${path}/courses`}>
        //                     <MyCourses></MyCourses>
        //                 </Route> 
        //                 <Route path={`${path}/review`}>
        //                     <Review></Review>
        //                 </Route>
        //                 <Route exact path={`${path}/`}>
        //                     <DashboardHome></DashboardHome>
        //                 </Route>
        //                 <AdminRoute path={`${path}/manageallcourses`}>
        //                     <ManageAllCourses></ManageAllCourses>
        //                 </AdminRoute>
        //                 <AdminRoute path={`${path}/addcourse`}>
        //                     <AddCourse></AddCourse>
        //                 </AdminRoute>
        //                 <AdminRoute path={`${path}/addteacher`}>
        //                     <AddTeacher></AddTeacher>
        //                 </AdminRoute>
        //                 <AdminRoute path={`${path}/makeadmin`}>
        //                     <MakeAdmin></MakeAdmin>
        //                 </AdminRoute>
        //                 <AdminRoute path={`${path}/manageCourses`}>
        //                     <ManageCourses></ManageCourses>
        //                 </AdminRoute>
                        
        //             </Switch> 

        //         </div>
        //     </div>

        // </div >
    );
};

export default Dashboard;