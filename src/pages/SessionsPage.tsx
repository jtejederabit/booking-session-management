import {useEffect, useState, useContext} from "react";
import {Calendar} from "../components/common/calendar/DayPicker.tsx";
import {Box, Divider} from "@mui/material";
import {SessionWrapper} from "../components/common/sessions/SessionWrapper.tsx";
import ActionButtons from "../components/common/actions/ActionButtons.tsx";
import NewSession from "../components/common/dialogs/newSession/NewSession.tsx";
import { sessionData as data} from '../utils/mock/session.mock.data.js'
import dayjs from 'dayjs';
import { AppContext } from '../utils/context/AppContext.tsx';

const SessionsPage = () => {
    const { sessionData, setSessionData, openNewtModal, setOpenNewModal } = useContext(AppContext);
    const [open, setOpen] = useState(false);
    const defaultDate = dayjs()

    const handleClickOpen = () => {
        setOpenNewModal(true);
    };

    const handleClose = () => {
        setOpenNewModal(false);
    };

    const handleDate = (date) => {
        setSessionData([...data].filter((session) => session.day === dayjs(date).format('YYYY/MM/DD')))
    }

    useEffect(() => {
        setSessionData([...data].filter((session) => session.day === dayjs(defaultDate).format('YYYY/MM/DD')))
    }, [])

    return (
        <>
            <Calendar handleDate={handleDate} />
            { openNewtModal && <NewSession isOpen={openNewtModal} handleClose={handleClose}/>}
            <Box
                sx={{ margin: '10px' }}
            >
                <ActionButtons handleNew={handleClickOpen}/>
                <Divider sx={{ marginTop: '8px'}}/>
                <SessionWrapper sessionData={sessionData}/>
            </Box>
        </>
    );
};

export default SessionsPage;