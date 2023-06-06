import {
    Box,
    Card,
    Chip, Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText, Rating,
    Typography
} from "@mui/material";
import {AccessTime, FitnessCenter} from "@mui/icons-material";

export const Session = ({
    session
}) => {
    const getRating = () => {
        const individualScore = session.review.map((r,indexR) => r*(indexR+1))
        const totalValue = session.review.reduce((a,b) => a+b)
        let totalScore = individualScore.reduce((a,b) => a+b)
        return totalScore/totalValue
    }

    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <AccessTime fontSize="large"/>
                </ListItemAvatar>
                <ListItemText
                    primary="09:30 - 10:30"
                    secondary={
                        <>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {session.description}
                            </Typography>
                        </>
                    }
                />
                <ListItemSecondaryAction sx={{ display: 'flex' }}>
                    <Chip color="success" icon={<FitnessCenter fontSize="small"/>} label={`${session.users.length}/${session.totalSlots}`} />
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                backgroundColor: '#fafafa'
            }}>
                <Rating name="size-small" value={getRating()} size="small" readOnly/>
            </Box>
        </>
    )
}