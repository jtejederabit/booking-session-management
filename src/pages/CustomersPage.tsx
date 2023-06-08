import React, {useEffect, useState} from 'react';
import {TextField, InputAdornment, Box, List, Grid, Chip, Divider} from "@mui/material";
import { PersonSearch, RemoveCircle, LocalOffer} from "@mui/icons-material";
import UserList from "../components/common/lists/UserList";
import BonusDialog from "../components/common/dialogs/bonusDialog/BonusDialog";
import {usersData as data} from '../utils/mock/users.mock.data.js'

const CustomersPage = () => {
    const [open, setOpen] = useState(false);
    const [searchString, setSearchString] = useState('')
    const [userList, setUserList] = useState(data)

    const searchUser = (e) => {
        setSearchString(e.target.value)
    }

    const handleClickOpen = (session) => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const userActions = (user) => {
        const removeUser = () => {
            // Add remove user logic from DB
        }

        const updateBonus = () => {
            // Add update bonus logic
        }

        return (
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Chip size="small" color="error" sx={{marginRight: '5px'}} icon={<LocalOffer />} label="0 / 12" onClick={handleClickOpen}/>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', alignSelf: 'center', justifyContent: 'end'}}>
                    <Chip size="small" icon={<RemoveCircle />} label="Eliminar" onClick={removeUser}/>
                </Grid>
            </Grid>
        )
    }

    useEffect(() => {
        if(searchString) {
            setUserList(data.filter((user) => user.first_name.toLowerCase().includes(searchString.toLowerCase())))
        } else {
            setUserList(data)
        }
    }, [searchString])

    return (
        <>
            <BonusDialog isOpen={open} handleClose={handleClose} />
            <Box sx={{ margin: '10px' }}>
                <TextField
                    id="input-with-icon-textfield"
                    label="Buscar usuario"
                    onChange={searchUser}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonSearch />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    fullWidth
                />
            </Box>
            <List sx={{ width: '100%', marginBottom: '58px' }}>
                {
                    userList.map((user, index) => {
                        return (
                            <>
                                <UserList user={user} isConfirmed={false} userActions={userActions}/>
                                {
                                    index < data.length -1 && <Divider key={`divider-${user.id}`} variant="inset" component="li" />
                                }
                            </>
                        )
                    })
                }
            </List>
        </>
    );
};

export default CustomersPage;