import {Card, List} from "@mui/material";
import {Session} from "./Session.tsx";

export const SessionWrapper = () => {
    return (
        <List sx={{width: '100%', bgcolor: 'background.paper'}}>
            <Card variant="outlined">
                <Session/>
            </Card>
        </List>
    )
}