import {useEffect, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Box, ButtonGroup} from "@mui/material";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';

const NewActivity = ({
    isOpen,
    handleClose
 }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const closeDialog = () => {
        setStartDate(null)
        setEndDate(null)
        handleClose()
    }

    useEffect(() => {
        if(startDate) {
            const newEndDate = dayjs(startDate).add(1,'hour')
            setEndDate(newEndDate)
        }
    }, [startDate]);

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>Añadir nueva actividad</DialogTitle>
            <DialogContent sx={{ paddingTop: '10px !important'}}>
                <TimePicker
                    label="Hora Inicio"
                    disablePast={true}
                    format="HH:mm"
                    sx={{ width: '100%', marginBottom: '10px'}}
                    onChange={(newDate) => {
                        setStartDate(newDate);
                    }}
                />
                <TimePicker
                    label="Hora Fin"
                    minTime={startDate}
                    value={endDate}
                    format="HH:mm"
                    sx={{ width: '100%'}}
                    onChange={(newDate) => {
                        setEndDate(newDate);
                    }}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    label="Título"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="slots"
                    label="Cupo"
                    type="number"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <ButtonGroup variant="text" aria-label="text button group" fullWidth>
                    <Button onClick={closeDialog}>GUARDAR</Button>
                    <Button onClick={closeDialog}>CANCELAR</Button>
                </ButtonGroup>
            </DialogActions>
        </Dialog>
    );
};

export default NewActivity;