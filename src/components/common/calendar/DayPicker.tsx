import { useState} from "react";
import {DateCalendar} from "@mui/x-date-pickers";
import dayjs, { Dayjs } from 'dayjs'

export const Calendar = ({
    handleDate,
 }) => {
    const [date, setDate] = useState<Dayjs | null>(dayjs());
    const onDateChange = (newDate) => {
        setDate(newDate);
        handleDate(newDate)
    }
    return (
        <DateCalendar
            value={date}
            onChange={(newValue) => onDateChange(newValue)}
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