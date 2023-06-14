import React, {useEffect, useState} from 'react';
import {TextField, ListItemIcon, Box, List, ListItem, ListItemButton, ListItemText, Checkbox, Divider, Typography, InputAdornment, FormControl, FormHelperText} from "@mui/material";

const SettingsPage = () => {
    const handleToggle = () => {

    }

    return (
        <Box sx={{ margin: '10px', marginBottom: '58px' }}>
            <Typography variant="h6" sx={{ marginBottom: '10px'}}>Configuración General</Typography>
            <FormControl variant="outlined" fullWidth>
                <TextField
                    size="small"
                    fullWidth
                    label="Penalizar al cancelar con meno de..."
                    inputProps={{
                        'aria-label': 'horas',
                    }}

                />
                <FormHelperText id="outlined-weight-helper-text">Horas</FormHelperText>
            </FormControl>
            <Divider sx={{ marginTop: '10px', marginBottom: '10px'}}/>
            <Typography variant="h6" sx={{ marginTop: '10px'}}>Notificaciones</Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItem
                    // key={value}
                    disablePadding
                >
                    <ListItemButton role={undefined} onClick={() => handleToggle} dense>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                // checked={checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                                // inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id='test' primary={`Sessión llena`} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
};

export default SettingsPage;