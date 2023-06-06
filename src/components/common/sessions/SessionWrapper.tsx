import {Card, List} from "@mui/material";
import {Session} from "./Session.tsx";

export const SessionWrapper = ({
    sessionData
}) => {
    return (
        <List sx={{width: '100%', bgcolor: 'background.paper', marginBottom: '58px'}}>
            {
                sessionData.map((session) => {
                    return (
                        <Card key={session._id} variant="outlined" sx={{ mb: '10px'}}>
                            <Session session={session}/>
                        </Card>
                    )
                })
            }

        </List>
    )
}