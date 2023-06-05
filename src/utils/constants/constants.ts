import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";

import * as Page from '../../pages/index.ts'

export const NavigationRoutes = [
    { path: '/', icon: CalendarMonthIcon},
    { path: '/customers', icon: GroupIcon},
    { path: '/settings', icon: SettingsIcon},
]