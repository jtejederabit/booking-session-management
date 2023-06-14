import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import SettingsIcon from "@mui/icons-material/Settings";

export const NavigationRoutes = [
    { path: '/', icon: CalendarMonthIcon},
    { path: '/customers', icon: GroupIcon},
    { path: '/settings', icon: SettingsIcon},
]

export const Notifications = {
    receive_title: true,
    receive_notifications_full: false,
    receive_notifications_assist: false,
    receive_notifications_cancel: false,
    receive_notifications_finish: false,
    send_title: true,
    send_notifications_update: false,
    send_notifications_cancel: false,
    send_notifications_assist: false,
    send_notifications_finish: false,

}

export enum NotificationsMap {
    receive_notifications_full = 'Sesión llena',
    receive_notifications_assist = 'Asistencia',
    receive_notifications_cancel = 'Cancelación',
    receive_notifications_finish = 'Finalización de bono',
    send_notifications_update = 'Sesión modificada',
    send_notifications_cancel = 'Sesión cancelada',
    send_notifications_assist = 'Asistencia verificada',
    send_notifications_finish = 'Bono finalizado',
    receive_title = 'Recibir notificaciones',
    send_title = 'Enviar notificaciones',
}