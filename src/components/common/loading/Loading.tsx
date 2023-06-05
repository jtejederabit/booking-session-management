import { Box, CircularProgress } from "@mui/material";
export const Loading = () => {
    return (
        <Box sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <CircularProgress />
        </Box>
    )
}