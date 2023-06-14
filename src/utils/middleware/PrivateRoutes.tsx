import { useEffect, useRef, useState, useContext } from "react";
import {Navigate, useLocation, useNavigate,} from 'react-router-dom';
import { Loading } from "../../components/common/loading/Loading";
import { AppContext } from "../context/AppContext";

export const PrivateRoute = ({ element: Element, protected: isProtected, ...rest }) => {
    const navigate = useNavigate()
    const { loggedIn } = useContext(AppContext)
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const previousPath = useRef('');

    useEffect(() => {
        !loggedIn && navigate('/login')
    }, [loggedIn]);

    useEffect(() => {

        if (location.pathname !== previousPath.current) {
            setIsLoading(true);

            const timeoutId = setTimeout(() => {
                setIsLoading(false);
            }, 2000);

            return () => clearTimeout(timeoutId);
        }

        previousPath.current = location.pathname;
    }, [location]);

    if (isProtected && !loggedIn) {
        return <Navigate to="/login" />;
    }

    if (isLoading) {
        return <Loading />;
    }

    return <Element/>;
};