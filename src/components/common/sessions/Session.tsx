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

export const Session = () => {
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
                                Metabólico
                            </Typography>
                        </>
                    }
                />
                <ListItemSecondaryAction sx={{ display: 'flex' }}>
                    <Chip color="success" icon={<FitnessCenter fontSize="small"/>} label="6/8" />
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                // marginBottom: 0.6,
                backgroundColor: '#fafafa'
            }}>
                <Rating name="size-small" defaultValue={2} size="small" readOnly/>
            </Box>
        </>
    )
}