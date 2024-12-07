import {HOME_ROUTE, ORG_ROUTE, STUDENTS_ROUTE, TICKET_ROUTE, USERS_ROUTE} from "../consts";
import {ticketPage} from "../../pages/ticket";
import {homePage} from "../../pages/home/";
import {usersPage} from "../../pages/users";
import {orgPage} from "../../pages/org";
import {studentsPage} from "../../pages/students";
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
        Component: homePage,
    },
    {
        path: TICKET_ROUTE,
        Component: ticketPage,
    },
    {
        path: USERS_ROUTE,
        Component: usersPage,
    },
    {
        path: ORG_ROUTE,
        Component: orgPage,
    },
    {
        path: STUDENTS_ROUTE,
        Component: studentsPage
    }
];

export const UserRoutes = [
    {
        path: TICKET_ROUTE,
        Component: ticketPage,
    },
];
