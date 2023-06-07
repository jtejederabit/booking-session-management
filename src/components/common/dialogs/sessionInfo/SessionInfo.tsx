import {Button, Dialog, DialogActions, DialogContent, DialogTitle, ButtonGroup} from "@mui/material";

const SessionInfo = ({
    isOpen,
    sessionInfo,
    handleClose
 }) => {
    return (
        <Dialog open={isOpen} onClose={handleClose} fullScreen>
            <DialogTitle>Añadir nueva actividad</DialogTitle>
            <DialogContent sx={{ paddingTop: '10px !important'}}>

            </DialogContent>
            <DialogActions>
                <ButtonGroup variant="text" aria-label="text button group" fullWidth>
                    <Button onClick={handleClose}>GUARDAR</Button>
                    <Button onClick={handleClose}>CANCELAR</Button>
                </ButtonGroup>
            </DialogActions>
        </Dialog>
    );
};

export default SessionInfo;