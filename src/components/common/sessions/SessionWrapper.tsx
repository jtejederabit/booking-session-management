import {Card, List} from "@mui/material";
import {Session} from "./Session.tsx";
import {useState} from "react";
import SessionInfo from "../dialogs/sessionInfo/SessionInfo.tsx";

export const SessionWrapper = ({
    sessionData
}) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <List sx={{width: '100%', bgcolor: 'background.paper', marginBottom: '58px'}}>
            <SessionInfo isOpen={open} handleClose={handleClose} sessionInfo={sessionData}/>
            {
                sessionData.map((session) => {
                    return (
                        <Card key={session._id} variant="outlined" sx={{ mb: '10px'}} onClick={handleClickOpen}>
                            <Session session={session}/>
                        </Card>
                    )
                })
            }

        </List>
    )
}