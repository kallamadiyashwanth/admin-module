import React, {Suspense, lazy} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Login = lazy(() => import('./components/login-page'));
const Profile = lazy(() => import('./components/profile'));
const Analytics = lazy(() => import('./components/analytics'));
const Courses = lazy(() => import('./components/courses'));
const Dashboard = lazy(() => import('./components/dashboard'));
const Contact = lazy(() => import('./components/contact'));
const AddCourse = lazy(() => import('./components/addcourse'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h2>"Loading..."</h2>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/addcourse" element={<AddCourse />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;