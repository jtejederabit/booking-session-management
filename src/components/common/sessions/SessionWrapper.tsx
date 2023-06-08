import {Alert, Button, Card, List} from "@mui/material";
import {Session} from "./Session.tsx";
import {useContext, useState} from "react";
import SessionInfo from "../dialogs/sessionInfo/SessionInfo.tsx";
import { AppContext } from '../../../utils/context/AppContext.tsx';
import {Cached} from "@mui/icons-material";

export const SessionWrapper = ({
    sessionData
}) => {
    const { moveUser, setMoveUser } = useContext(AppContext);
    const [open, setOpen] = useState(false);
    const [selectedSession, setSelectedSession] = useState(null)

    const handleClickOpen = (session) => {
        if(moveUser) {
            // Add logic to move the user to the selected session and remove from the previous one
            // Open the previous session once changes are commited
            resetUserMovement()
        } else {
            setSelectedSession(session)
            setOpen(true);
        }
    };

    const handleClose = () => {
        setSelectedSession(null)
        setOpen(false);
    };

    const resetUserMovement = () => {
        setSelectedSession(moveUser.session)
        setOpen(true);
        setMoveUser(null);
    }

    return (
        <>
            {
                moveUser &&
                (
                    <>
                        <Alert
                            icon={<Cached />}
                            severity="info"
                            sx={{
                                '& .MuiAlert-icon' : {
                                    alignSelf: 'center'
                                },
                                '& .MuiAlert-message' : {
                                    textAlign: 'center',
                                    width: '100%'
                                }
                            }}
                        >
                            Selecciona nueva sesión para el usuario
                            <br/>
                            -- o --
                            <br/>
                            <Button variant="text" size="small" color="error" fullWidth onClick={resetUserMovement}>Cancelar movimiento</Button>
                        </Alert>

                    </>
                )
            }
            <List sx={{width: '100%', bgcolor: 'background.paper', marginBottom: '58px'}}>
                {
                    open && <SessionInfo isOpen={open} handleClose={handleClose} sessionInfo={selectedSession}/>
                }
                {
                    sessionData.map((session) => {
                        return (
                            <Card key={session._id} variant="outlined" sx={{ mb: '10px'}} onClick={() => handleClickOpen(session)}>
                                <Session session={session}/>
                            </Card>
                        )
                    })
                }

            </List>
        </>
    )
}