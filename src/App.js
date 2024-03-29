import { Route,  Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Admin from "./components/Admin/Admin";
import Contact from "./components/Contact/Contact";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import EmailSir from "./components/EmailSir/EmailSir";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import FullCourseDetails from "./components/FullCourseDetail/FullCourseDetails";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Courses from "./components/OurCourses/Courses";
import OurTeam from "./components/OurTeamMembers/OurTeam";
import Payment from "./components/Payment/Payment";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Purchase from "./components/Purchase/Purchase/Purchase";
import Register from "./components/Register/Register";
import ServiceDetails from "./components/Service/Service/ServiceDetails";
import Teachers from "./components/Teacher-Profile/Teachers";
import TeacherDescriptions from "./components/TeacherDescriptions/TeacherDescriptions";
import AuthProvider from './context/AuthProvider';
import AddCourse from "./pages/AddCourse/AddCourse";
import AddTeacher from "./pages/AddTeacher/AddTeacher";


function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
        <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/teacher's profile">
            <Teachers></Teachers>
          </Route>
          <Route path="/ourteam">
            <OurTeam></OurTeam>
          </Route>
          <PrivateRoute path="/payment">
            <Payment></Payment>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/feedback">
            <Feedback></Feedback>
          </Route>
          <Route path="/ourcourses">
            <Courses></Courses>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/addcourse">
            <AddCourse></AddCourse>
          </Route>
          <Route path="/addteacher">
            <AddTeacher></AddTeacher>
          </Route>
          <Route path="/myclasses/:id">
            <TeacherDescriptions></TeacherDescriptions>
          </Route>
          
          <Route path="/email">
            <EmailSir></EmailSir>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <PrivateRoute path="/purchase/:id">
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path="/courseDetails">
            <CourseDetails></CourseDetails>
          </Route>
          <Route path="/fullcourseDetails">
            <FullCourseDetails></FullCourseDetails>
          </Route>
          <PrivateRoute path="/service/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>

          <Route path="/*">
            <NotFound></NotFound>
          </Route>

        </Switch>
        <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;