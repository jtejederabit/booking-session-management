import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    ButtonGroup,
    Typography,
    Grid,
    Fab,
    List,
    Divider,
    Chip
} from "@mui/material";
import { EditCalendar, EventBusy, Cached, RemoveCircle } from "@mui/icons-material";
import { AppContext } from '../../../../utils/context/AppContext.tsx';
import {useContext, useState} from "react";
import {usersData as data} from '../../../../utils/mock/users.mock.data.js'
import UserList from "../../lists/UserList";

const SessionInfo = ({
    isOpen,
    sessionInfo,
    handleClose
 }) =>{
    const { setOpenNewModal, setSessionEdit, setMoveUser } = useContext(AppContext);
    const [confirmed, setConfirmed] = useState(false);
    const [users, setUsers] = useState(data)

    const handleClickOpen = () => {
        setSessionEdit(sessionInfo)
        setOpenNewModal(true);
    };

    const userActions = (user) => {
        const removeUser = () => {
            const userIndex = users.findIndex((u) => u.id === user.id)
            if (userIndex !== -1) {
                const updatedUsers = [...users];
                updatedUsers.splice(userIndex, 1);
                setUsers(updatedUsers);
            }
        }

        const moveUser = () => {
            setMoveUser({
                user: user,
                session: sessionInfo
            })
            handleClose()
        }

        return (
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Chip size="small" sx={{marginRight: '5px'}} icon={<Cached />} label="Mover" onClick={moveUser}/>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', alignSelf: 'center', justifyContent: 'end'}}>
                    <Chip size="small" icon={<RemoveCircle />} label="Quitar" onClick={removeUser}/>
                </Grid>
            </Grid>
        )
    }

    const confirmUsers = () => {
        setConfirmed(true)
    }

    return (
        <Dialog open={isOpen} onClose={handleClose} fullScreen>
            <DialogTitle sx={{ backgroundColor: '#ffcc84'}}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        {sessionInfo.description}
                        <br/>
                        <Typography variant="h6" sx={{ color: 'grey' , fontSize: 16}}>{sessionInfo.startFullTime}</Typography>
                    </Grid>
                    {
                        !confirmed &&
                        (
                            <Grid item xs={6} sx={{ display: 'flex', alignSelf: 'center', justifyContent: 'end'}}>
                                <Fab color="primary" size="small" sx={{ boxShadow: 'none', marginRight: '5px'}} onClick={handleClickOpen}><EditCalendar /></Fab>
                                <Fab color="primary" size="small" sx={{ boxShadow: 'none'}}><EventBusy /></Fab>
                            </Grid>
                        )
                    }
                </Grid>

            </DialogTitle>
            <Button variant="contained" color="success" fullWidth sx={{ borderRadius: 0 }} onClick={confirmUsers} disabled={confirmed}>{confirmed ? 'Sesión confirmada' : 'Confirmar sesión'}</Button>
            <DialogContent sx={{ paddingLeft: 0, paddingRight: 0, paddingTop: '10px !important'}}>
                <List sx={{ width: '100%' }}>
                    {
                        users.map((user, index) => {
                            return (
                                <>
                                    <UserList user={user} isConfirmed={confirmed} userActions={userActions}/>
                                    {
                                        index < data.length -1 && <Divider key={`divider-${user.id}`} variant="inset" component="li" />
                                    }

                                </>
                            )
                        })
                    }
                </List>
            </DialogContent>
            <DialogActions>
                <ButtonGroup variant="text" aria-label="text button group" fullWidth>
                    <Button onClick={handleClose}>GUARDAR</Button>
                    <Button onClick={handleClose}>CANCELAR</Button>
                </ButtonGroup>
            </DialogActions>
        </Dialog>
    );
};

export default SessionInfo;