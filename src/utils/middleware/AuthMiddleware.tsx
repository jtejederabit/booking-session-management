import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AuthMiddleware = ({ children }) => {
    const navigate = useNavigate ();
    const location = useLocation()

    useEffect(() => {
        // Verificar si el usuario ha iniciado sesión
        const isLoggedIn = true; // Aquí debes implementar tu lógica para verificar el inicio de sesión
        if(location.pathname === '/login' && isLoggedIn)  {
            navigate('/');
            return;
        }

        if (!isLoggedIn) {
            // Redireccionar al inicio de sesión si el usuario no ha iniciado sesión
            navigate('/login');
        }

    }, [navigate]);

    return children;
};

export default AuthMiddleware;
