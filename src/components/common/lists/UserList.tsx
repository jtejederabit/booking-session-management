import React from 'react';
import {Avatar, Grid, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {CheckCircle} from "@mui/icons-material";

const UserList = ({user, isConfirmed, userActions}) => {
    return (
        <ListItem key={user.id} alignItems="flex-start">
            <ListItemAvatar sx={{ marginTop: 0}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                sx={{ alignSelf: 'center'}}
                secondary={ !isConfirmed && userActions(user)}
            >
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        {user.first_name}
                    </Grid>
                    {
                        isConfirmed &&
                        (
                            <Grid item xs={6} sx={{ display: 'flex', alignSelf: 'center', justifyContent: 'end'}}>
                                <CheckCircle color="success"/>
                            </Grid>
                        )
                    }
                </Grid>
            </ListItemText>
        </ListItem>
    );
};

export default UserList;