import {
    HOME_ROUTE,
    ORG_ROUTE,
    PERSONALSTUDENTS_ROUTE,
    PROFILE_ROUTE,
    STUDENTS_ROUTE,
    TICKET_ROUTE, TICKETCREATE_ROUTE,
    USERS_ROUTE
} from "../consts";
import {ticketPage} from "../../pages/ticket/ticket";
import {homePage} from "../../pages/home/";
import {usersPage} from "../../pages/users";
import {orgPage} from "../../pages/org";
import {studentsPage} from "../../pages/students";
import {personalPageStudents} from "../../pages/personal/personalPageStudents";
import {profilePage} from "../../pages/profile";
import {ticketCreatePage} from "../../pages/ticket/ticketCreate";

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
    },
    {
        path: PERSONALSTUDENTS_ROUTE,
        Component: personalPageStudents,
    },
    {
        path: PROFILE_ROUTE,
        Component: profilePage,
    },
    {
        path: TICKETCREATE_ROUTE,
        Component: ticketCreatePage,
    }

];

export const UserRoutes = [
    {
        path: TICKET_ROUTE,
        Component: ticketPage,
    },
];
