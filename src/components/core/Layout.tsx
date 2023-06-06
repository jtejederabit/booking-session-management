import {useEffect, useState} from "react";
import {Box} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import {useLocation} from "react-router-dom";
import {Navigation} from "./navigation/Navigation.tsx";
import {Loading} from "../common/loading/Loading.tsx";

const Layout = ({ children }) => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [location]);

    return (
        <Box>
            <CssBaseline/>
            {loading ?
                <Loading/>
                :
                <>
                    {children}
                    <Navigation/>
                </>
            }
        </Box>
    )
}

export default Layout;