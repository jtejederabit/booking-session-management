import {useEffect, useState} from "react";
import {
    Box,
    Fab,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {useLocation, useNavigate} from "react-router-dom";
import {SessionWrapper} from "../common/sessions/SessionWrapper.tsx";
import {Calendar} from "../common/calendar/DayPicker.tsx";
import {Navigation} from "./navigation/Navigation.tsx";
import {Loading} from "../common/loading/Loading.tsx";

const Layout = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [location]);

    return (
        <Box sx={{ height: '100vh' }}>
            <CssBaseline/>
            {loading ?
                <Loading/>
                :
                <>
                    <Calendar/>
                    <Box sx={{ margin: '10px' }}>
                        <SessionWrapper/>
                    </Box>
                    <Fab
                        color="success"
                        sx={{
                            position: 'absolute',
                            bottom: 80,
                            right: 30,
                        }}
                        onClick={toggleDrawer(true)}
                    >
                        <EditCalendarIcon/>
                    </Fab>
                    <SwipeableDrawer
                        anchor="bottom"
                        open={open}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                    >
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <AddIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Añadir nueva sesión"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ContentCopyIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Copiar día seleccionado"
                                />
                            </ListItem>
                        </List>
                    </SwipeableDrawer>
                    <Navigation/>
                </>
            }
        </Box>
    )
}

export default Layout;