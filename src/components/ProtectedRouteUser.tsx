import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children?: ReactNode;
  }

const ProtectedRouteUser = ({ children }: ProtectedRouteProps) => {
    const token = localStorage.getItem("token");

    if (!token) return <Navigate to="/login" />;
    return (
        children
    )
}

export default ProtectedRouteUser;