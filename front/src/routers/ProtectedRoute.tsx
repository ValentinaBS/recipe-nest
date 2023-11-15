import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const auth = false;

    return auth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;