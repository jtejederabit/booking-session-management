import {useEffect, useState} from "react";
import {Calendar} from "../components/common/calendar/DayPicker.tsx";
import {Box, ButtonGroup, Button, Divider, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions} from "@mui/material";
import {SessionWrapper} from "../components/common/sessions/SessionWrapper.tsx";
import {ContentCopy, Add} from "@mui/icons-material";
import ActionButtons from "../components/common/actions/ActionButtons.tsx";
import NewActivity from "../components/common/dialogs/newActivity/NewActivity.tsx";
import { sessionData } from '../utils/mock/session.mock.data.js'
import dayjs from 'dayjs';

const SessionsPage = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([])
    const defaultDate = dayjs()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDate = (date) => {
        setData([...sessionData].filter((session) => session.day === dayjs(date).format('YYYY/MM/DD')))
    }

    useEffect(() => {
        setData([...sessionData].filter((session) => session.day === dayjs(defaultDate).format('YYYY/MM/DD')))
    }, [])

    return (
        <>
            <Calendar handleDate={handleDate} />
            <NewActivity isOpen={open} handleClose={handleClose}/>
            <Box
                sx={{ margin: '10px' }}
            >
                <ActionButtons handleNew={handleClickOpen}/>
                <Divider sx={{ marginTop: '8px'}}/>
                <SessionWrapper sessionData={data}/>
            </Box>
        </>
    );
};

export default SessionsPage;