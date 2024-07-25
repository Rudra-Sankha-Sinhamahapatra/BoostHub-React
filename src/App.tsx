
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Routes/LandingPage';
import './App.css'
import MyCoursesRoute from './Routes/MyCourse';
import CreateCourseRoute from './Routes/CreateCourse';
import InfoRoute from './Routes/Info';
import SigninRoute from './Routes/Signin';
import SignupRoute from './Routes/Signup';
import ViewCourseDetailsRoute from './Routes/Course';
import AddCommentRoute from './Routes/Comment';
import AddRatingRoute from './Routes/Rating';
import AddFeedbackRoute from './Routes/Feedback';
import HomeRoute from './Routes/Home';

function App() {


  return(
    <>
     <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home/mycourse" element={<MyCoursesRoute />} />
        <Route path="/home" element={<HomeRoute />} />
        <Route path="/home/create" element={<CreateCourseRoute />} />
        <Route path="/home/info" element={<InfoRoute />} />
        <Route path="/login" element={<SigninRoute />} />
        <Route path="/signup" element={<SignupRoute />} />
        <Route path="/home/course/:courseId" element={<ViewCourseDetailsRoute />} />
        <Route path="/home/course/:courseId/comment" element={<AddCommentRoute />} />
        <Route path="/home/course/:courseId/rating" element={<AddRatingRoute />} />
        <Route path="/home/course/:courseId/feedback" element={<AddFeedbackRoute />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
