import {DateCalendar} from "@mui/x-date-pickers";

export const Calendar = () => {
    return (
        <DateCalendar
            sx={{
                width: '100%',
                "& > div > div": {
                    justifyContent: "space-between !important",
                    paddingLeft: 1.25,
                    paddingRight: 1.25,
                },
                "& div[role=row]": {
                    paddingLeft: 1.25,
                    paddingRight: 1.25,
                    justifyContent: "space-between !important",
                },
            }}
        />
    )
}