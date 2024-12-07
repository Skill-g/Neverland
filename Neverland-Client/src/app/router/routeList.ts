import {TICKET_ROUTE, HOME_ROUTE, USERS_ROUTE} from "../consts";
import TicketPage from "../../pages/ticket/ui/ticketPage.tsx";
import HomePage from "../../pages/home/ui/homePage.tsx";
import UsersPage from "../../pages/users/ui/usersPage.tsx";
// import AdminPage from "../../pages/admin/ui/adminPage.tsx"; // Предполагаемый компонент админки
//
//
// export const AuthRoutes = [
//     {
//         path: ADMIN_ROUTE,
//         Component: AdminPage, // Убедитесь, что компонент AdminPage существует
//     },
// ];

export const PubRoutes = [
    {
        path: HOME_ROUTE,
        Component: HomePage,
    },
    {
        path: TICKET_ROUTE,
        Component: TicketPage,
    },
    {
        path: USERS_ROUTE,
        Component: UsersPage,
    }
];

export const UserRoutes = [
    {
        path: TICKET_ROUTE,
        Component: TicketPage,
    },
];
