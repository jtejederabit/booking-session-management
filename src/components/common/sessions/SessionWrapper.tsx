import {Alert, Button, Card, List} from "@mui/material";
import {Session} from "./Session.tsx";
import {useContext, useState} from "react";
import SessionInfo from "../dialogs/sessionInfo/SessionInfo.tsx";
import { AppContext } from '../../../utils/context/AppContext.tsx';
import {Cached} from "@mui/icons-material";

export const SessionWrapper = ({
    sessionData,
    handleCopy,
    isOlder
}) => {
    const { moveUser, setMoveUser, copy, setCopy } = useContext(AppContext);
    const [open, setOpen] = useState(false);
    const [selectedSession, setSelectedSession] = useState(null)

    const handleClickOpen = (session) => {
        if(moveUser) {
            resetUserMovement()
        } else {
            setSelectedSession(session)
            setOpen(true);
        }
    };

    const copyToDay = () => {
        console.log("copy")
    }

    const handleClose = () => {
        setSelectedSession(null)
        setOpen(false);
    };

    const resetUserMovement = () => {
        setSelectedSession(moveUser.session)
        setOpen(true);
        setMoveUser(null);
    }

    const resetCopy = () => {
        setCopy(null)
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
            {
                copy &&
                (
                    <>
                        <Alert
                            severity="info"
                            sx={{
                                '& .MuiAlert-icon' : {
                                    alignSelf: 'center',
                                    display: 'none'
                                },
                                '& .MuiAlert-message' : {
                                    textAlign: 'center',
                                    width: '100%'
                                }
                            }}
                        >

                            <Button size="small" variant="contained" color="success" sx={{ marginBottom: '5px'}} disabled={isOlder} onClick={() => handleCopy()}>Copiar sesiones al día seleccionado</Button>
                            <Button variant="text" size="small" color="error" fullWidth onClick={resetCopy}>Cancelar la copia</Button>
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