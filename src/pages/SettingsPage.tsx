import React, {useContext} from 'react';
import {
    TextField,
    ListItemIcon,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Checkbox,
    Divider,
    Typography,
    FormControl,
    FormHelperText,
    ListSubheader,
    Button
} from "@mui/material";
import {AppContext} from "../utils/context/AppContext";
import {NotificationsMap} from "../utils/constants/constants";

const SettingsPage = () => {
    const {setLoggedIn, notifications, setNotifications} = useContext(AppContext)

    const handleToggle = (notification) => {
        setNotifications((prevNotifications) => ({
            ...prevNotifications,
            [notification]: !prevNotifications[notification]
        }));
    };

    return (
        <Box sx={{ margin: '10px', marginBottom: '58px' }}>
            <Typography variant="h6" sx={{ marginBottom: '10px'}}>Configuración General</Typography>
            <FormControl variant="outlined" fullWidth>
                <TextField
                    size="small"
                    fullWidth
                    label="Penalizar al cancelar con menos de..."
                    inputProps={{
                        'aria-label': 'horas',
                    }}

                />
                <FormHelperText id="outlined-weight-helper-text">Horas</FormHelperText>
            </FormControl>
            <Divider sx={{ marginTop: '10px', marginBottom: '10px'}}/>
            <Typography variant="h6" sx={{ marginTop: '10px'}}>Notificaciones</Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {
                    Object.keys(notifications).map((notification) => {
                        if(notification.includes('title')){
                            return <ListSubheader key={notification}>{NotificationsMap[notification]}</ListSubheader>
                        } else {
                            return (
                                <ListItem
                                    key={notification}
                                    disablePadding
                                >
                                    <ListItemButton role={undefined} onClick={() => handleToggle} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={notifications[notification]}
                                                tabIndex={-1}
                                                disableRipple
                                                // inputProps={{ 'aria-labelledby': labelId }}
                                                onClick={() => handleToggle(notification)}
                                            />
                                        </ListItemIcon>
                                        <ListItemText id='test' primary={NotificationsMap[notification]} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        }

                    })
                }
            </List>
            <Divider sx={{ marginTop: '10px', marginBottom: '10px'}}/>
            <Button fullWidth color="success" variant="contained">Guardar</Button>
            <Button fullWidth onClick={() => setLoggedIn(false)}>Cerrar Sesión</Button>
        </Box>
    );
};

export default SettingsPage;