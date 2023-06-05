import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";
import {NavigationRoutes} from "../../../utils/constants/constants.ts";

export const Navigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const activePath = NavigationRoutes.findIndex((route) => route.path === location.pathname)

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation  value={activePath}>
                {
                    NavigationRoutes.map((route) => {
                        return <BottomNavigationAction key={route.path} icon={<route.icon/>} onClick={() => navigate(route.path)}/>
                    })
                }
            </BottomNavigation>
        </Paper>
    )
}