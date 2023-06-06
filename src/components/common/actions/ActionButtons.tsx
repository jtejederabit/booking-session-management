import React from 'react';
import {Button, ButtonGroup} from "@mui/material";
import {Add, ContentCopy} from "@mui/icons-material";

const ActionButtons = ({
    handleNew,
}) => {
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
            <Button  startIcon={<ContentCopy/>} disabled>
                Copiar día
            </Button>
        </ButtonGroup>
    );
};

export default ActionButtons;