import React, {useContext} from 'react';
import {Button, ButtonGroup} from "@mui/material";
import {Add, ContentCopy} from "@mui/icons-material";
import {AppContext} from "../../../utils/context/AppContext";

const ActionButtons = ({
    handleNew,
    copyFrom,
}) => {
    const {setCopy} = useContext(AppContext)

    return (
        <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            fullWidth
            size="small"
        >
            <Button startIcon={<Add/>} onClick={handleNew}>
                Crear
            </Button>
            <Button  startIcon={<ContentCopy/>} disabled={!copyFrom.length} onClick={() => setCopy(copyFrom)}>
                Copiar día
            </Button>
        </ButtonGroup>
    );
};

export default ActionButtons;