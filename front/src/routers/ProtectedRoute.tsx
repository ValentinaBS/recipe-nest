import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const navigate = useNavigate();
    let auth = false;

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');

        if (userToken) {
            auth = true; 
        }
    }, [navigate]);

    return auth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;