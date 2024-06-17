import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Cars from "./pages/Cars";
import NotFound from "./components/NotFound";
import LandingPage from "./pages/LandingPage";
import LoginUser from "./pages/Login";
import LoginAdmin from "./pages/LoginAdmin";
import Register from "./pages/Register";
import FilterCars from "./pages/FilterCars";
import ProtectedRouteUser from "./components/ProtectedRouteUser";
import AuthProvider from "./context/authContext";
import AddCar from "./pages/AddCar";
import EditCar from "./pages/EditCar";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/*"
          element={
            <ProtectedRouteUser>
              <Routes>
                <Route path="/cari-mobil" element={<FilterCars />} />
              </Routes>
            </ProtectedRouteUser>
          }
        />
        <Route
          path="admin/*"
          element={
            <ProtectedRoute>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/add-car" element={<AddCar />} />
                <Route path="/edit-car/:id" element={<EditCar />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ProtectedRoute>
          }
        />

        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
