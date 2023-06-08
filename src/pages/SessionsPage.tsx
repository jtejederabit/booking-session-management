import {useEffect, useState, useContext} from "react";
import {Calendar} from "../components/common/calendar/DayPicker.tsx";
import {Box, Divider} from "@mui/material";
import {SessionWrapper} from "../components/common/sessions/SessionWrapper.tsx";
import ActionButtons from "../components/common/actions/ActionButtons.tsx";
import NewSession from "../components/common/dialogs/newSession/NewSession.tsx";
import dayjs from 'dayjs';
import { AppContext } from '../utils/context/AppContext.tsx';

const SessionsPage = () => {
    const { sessionData, openNewtModal, setOpenNewModal, moveUser } = useContext(AppContext);
    const [daySessions, setDaySessions] = useState([])
    const defaultDate = dayjs()


    const handleClickOpen = () => {
        setOpenNewModal(true);
    };

    const handleClose = () => {
        setOpenNewModal(false);
    };

    const handleDate = (date) => {
        setDaySessions([...sessionData].filter((session) => session.day === dayjs(date).format('YYYY/MM/DD')))
    }

    useEffect(() => {
        setDaySessions([...sessionData].filter((session) => session.day === dayjs(defaultDate).format('YYYY/MM/DD')))
    }, [])

    return (
        <>
            <Calendar handleDate={handleDate} />
            { openNewtModal && <NewSession isOpen={openNewtModal} handleClose={handleClose}/>}
            <Box
                sx={{ margin: '10px' }}
            >
                { !moveUser && <ActionButtons handleNew={handleClickOpen}/>}
                <Divider sx={{ marginTop: '8px'}}/>
                <SessionWrapper sessionData={daySessions}/>
            </Box>
        </>
    );
};

export default SessionsPage;