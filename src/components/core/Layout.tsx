import {useContext} from "react";
import {Box} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import {Navigation} from "./navigation/Navigation.tsx";
import {AppContext} from "../../utils/context/AppContext";

const Layout = ({ children }) => {
    const {loggedIn} = useContext(AppContext)

    return (
        <Box>
            <CssBaseline/>
            {children}
            {loggedIn && <Navigation/>}
        </Box>
    )
}

export default Layout;