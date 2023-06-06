import { useState} from "react";
import {Calendar} from "../components/common/calendar/DayPicker.tsx";
import {Box, ButtonGroup, Button, Divider, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions} from "@mui/material";
import {SessionWrapper} from "../components/common/sessions/SessionWrapper.tsx";
import {ContentCopy, Add} from "@mui/icons-material";
import ActionButtons from "../components/common/actions/ActionButtons.tsx";
import NewActivity from "../components/common/dialogs/newActivity/NewActivity.tsx";

const SessionsPage = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Calendar/>
            <NewActivity isOpen={open} handleClose={handleClose}/>
            <Box
                sx={{ margin: '10px' }}
            >
                <ActionButtons handleNew={handleClickOpen}/>
                <Divider sx={{ marginTop: '8px'}}/>
                <SessionWrapper/>
            </Box>
        </>
    );
};

export default SessionsPage;