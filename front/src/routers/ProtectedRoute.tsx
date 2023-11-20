import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const auth = true;

    return auth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;