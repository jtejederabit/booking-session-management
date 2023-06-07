import {useEffect, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, ButtonGroup} from "@mui/material";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';

const NewSession = ({
    isOpen,
    handleClose
 }) => {
    const [sessionData, setSessionData] = useState({title: "",slots: "",startDate: "", endDate: ""});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSessionData((prevSessionData) => ({ ...prevSessionData, [name]: value }));
    };

    const resetData = () => {
        setSessionData({title: "",slots: "",startDate: "", endDate: ""})
    }

    const closeDialog = () => {
        resetData()
        handleClose()
    }
    const saveSession = () => {
        console.log("sessionData ", sessionData)
        // handleClose()
    }

    useEffect(() => {
        if(sessionData.startDate) {
            const newEndDate = dayjs(sessionData.startDate).add(1,'hour')
            const event = {
                target: {
                    name: 'endDate',
                    value: newEndDate
                }
            }
            handleChange(event)
        }
    }, [sessionData.startDate]);

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>Añadir nueva actividad</DialogTitle>
            <DialogContent sx={{ paddingTop: '10px !important'}}>
                <TimePicker
                    label="Hora Inicio"
                    disablePast={true}
                    name="startDate"
                    format="HH:mm"
                    sx={{ width: '100%', marginBottom: '10px'}}
                    onChange={(newDate) => {
                        const event = {
                            target: {
                                name: 'startDate',
                                value: newDate
                            }
                        }
                        handleChange(event)
                    }}
                />
                <TimePicker
                    label="Hora Fin"
                    minTime={sessionData.startDate}
                    value={sessionData.endDate}
                    name="endDate"
                    format="HH:mm"
                    sx={{ width: '100%'}}
                    onChange={(newDate) => {
                        const event = {
                            target: {
                                name: 'endDate',
                                value: newDate
                            }
                        }
                        handleChange(event)
                    }}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    value={sessionData.title}
                    label="Título"
                    name="title"
                    onChange={handleChange}
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="slots"
                    value={sessionData.slots}
                    name="slots"
                    label="Cupo"
                    onChange={handleChange}
                    type="number"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <ButtonGroup variant="text" aria-label="text button group" fullWidth>
                    <Button onClick={saveSession}>GUARDAR</Button>
                    <Button onClick={closeDialog}>CANCELAR</Button>
                </ButtonGroup>
            </DialogActions>
        </Dialog>
    );
};

export default NewSession;