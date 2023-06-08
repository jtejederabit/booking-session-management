import React, {useContext, useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    ButtonGroup,
    InputAdornment
} from "@mui/material";
import { AppContext } from "../../../../utils/context/AppContext.tsx";

const BonusDialog = ({
    isOpen,
    handleClose
 }) => {
    const [sessionData, setSessionData] = useState({current: "",totalSlots: "", price: ""});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSessionData((prevSessionData) => ({ ...prevSessionData, [name]: value }));
    };

    const resetData = () => {
        setSessionData({current: "",totalSlots: "", price: ""})
    }

    const closeDialog = () => {
        resetData()
        handleClose()
    }
    const saveSession = () => {
        console.log("sessionData ", sessionData)
        // handleClose()
    }


    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>Bono</DialogTitle>
            <DialogContent sx={{ paddingTop: '10px !important'}}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="title"
                    value={sessionData.current}
                    label="Asistencias"
                    name="current"
                    onChange={handleChange}
                    type="number"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="slots"
                    value={sessionData.totalSlots}
                    name="totalSlots"
                    label="Clases"
                    onChange={handleChange}
                    type="number"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="slots"
                    value={sessionData.price}
                    name="price"
                    label="Precio"
                    onChange={handleChange}
                    type="number"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    fullWidth
                    variant="standard"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">€</InputAdornment>,
                    }}
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

export default BonusDialog;