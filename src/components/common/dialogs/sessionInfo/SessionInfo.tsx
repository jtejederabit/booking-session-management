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
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Divider,
    Chip
} from "@mui/material";
import { EditCalendar, EventBusy, Cached, CheckCircle, RemoveCircle } from "@mui/icons-material";
import { AppContext } from '../../../../utils/context/AppContext.tsx';
import {useContext} from "react";
import {usersData as data} from '../../../../utils/mock/users.mock.data.js'

const SessionInfo = ({
    isOpen,
    sessionInfo,
    handleClose
 }) =>{
    const { setOpenNewModal, setSessionEdit } = useContext(AppContext);

    const handleClickOpen = () => {
        setSessionEdit(sessionInfo)
        setOpenNewModal(true);
    };

    const UserActions = (user) => {
        return (
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Chip size="small" sx={{marginRight: '5px'}} icon={<Cached />} label="Mover" />
                    <Chip size="small" icon={<CheckCircle />} label="Confirmar" />
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', alignSelf: 'center', justifyContent: 'end'}}>
                    <Chip size="small" icon={<RemoveCircle />} label="Quitar"/>
                </Grid>
            </Grid>
        )
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
                    <Grid item xs={6} sx={{ display: 'flex', alignSelf: 'center', justifyContent: 'end'}}>
                        <Fab color="primary" size="small" sx={{ boxShadow: 'none', marginRight: '5px'}} onClick={handleClickOpen}><EditCalendar /></Fab>
                        <Fab color="primary" size="small" sx={{ boxShadow: 'none'}}><EventBusy /></Fab>
                    </Grid>
                </Grid>

            </DialogTitle>
            <Button variant="contained" color="success" fullWidth sx={{ borderRadius: 0 }}>Confirmar todos</Button>
            <DialogContent sx={{ paddingLeft: 0, paddingRight: 0, paddingTop: '10px !important'}}>
                <List sx={{ width: '100%' }}>
                    {
                        data.map((user, index) => {
                            return (
                                <>
                                    <ListItem key={user.id} alignItems="flex-start">
                                        <ListItemAvatar sx={{ marginTop: 0}}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            sx={{ alignSelf: 'center'}}
                                            primary={user.first_name}
                                            secondary={<UserActions/>}
                                        />
                                    </ListItem>
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