import React, {useState} from 'react';
import {Calendar} from "../components/common/calendar/DayPicker.tsx";
import {Box, Fab, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer} from "@mui/material";
import {SessionWrapper} from "../components/common/sessions/SessionWrapper.tsx";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import AddIcon from "@mui/icons-material/Add";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const SessionsPage = () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
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
        </>
    );
};

export default SessionsPage;