import {useEffect, useState, useContext} from "react";
import {Calendar} from "../components/common/calendar/DayPicker.tsx";
import {Box, Divider} from "@mui/material";
import {SessionWrapper} from "../components/common/sessions/SessionWrapper.tsx";
import ActionButtons from "../components/common/actions/ActionButtons.tsx";
import NewSession from "../components/common/dialogs/newSession/NewSession.tsx";
import dayjs from 'dayjs';
import { AppContext } from '../utils/context/AppContext.tsx';

const SessionsPage = () => {
    const { sessionData, openNewtModal, setOpenNewModal, moveUser, copy, setCopy } = useContext(AppContext);
    const [daySessions, setDaySessions] = useState([])
    const [date, setDate] = useState(null)
    const defaultDate = dayjs()


    const handleClickOpen = () => {
        setOpenNewModal(true);
    };

    const handleClose = () => {
        setOpenNewModal(false);
    };

    const handleDate = (date) => {
        setDaySessions([...sessionData].filter((session) => session.day === dayjs(date).format('YYYY/MM/DD')))
        setDate(date)
    }

    const handleCopyTo = () => {
        // TODO: add logic to copy the session data from day to selected day
        // copy from --> copy
        // copy to --> date
        setCopy(null)
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
                { !moveUser && <ActionButtons handleNew={handleClickOpen} copyFrom={daySessions}/>}
                <Divider sx={{ marginTop: '8px'}}/>
                <SessionWrapper sessionData={daySessions} handleCopy={handleCopyTo} isOlder={dayjs().isAfter(dayjs(date).add(1,'day'))}/>
            </Box>
        </>
    );
};

export default SessionsPage;