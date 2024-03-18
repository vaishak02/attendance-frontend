import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import CustomBreadcrumbs from "./components/CustomBreadcrumbs";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Students from "./pages/Students";
import Attendance from "./pages/Attendance";
import Profile from "./pages/Profile";

const PrivateRoutes = () => {
  const isAuth = localStorage.getItem("isAuth");
  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};

const RestrictedRoutes = () => {
  const isAuth = localStorage.getItem("isAuth");
  return <>{!isAuth ? <Outlet /> : <Navigate to="/home" />}</>;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <CustomBreadcrumbs />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />
            <Route path="/home/students" element={<Students />} />
            <Route path="/home/attendance" element={<Attendance />} />
            <Route path="/home/profile" element={<Profile />} />
          </Route>
          <Route element={<RestrictedRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-in" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
