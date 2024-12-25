import {
    ADMIN_ROUTE, CREATESTUDENT_ROUTE,
    HOME_ROUTE,
    ORG_ROUTE, ORGCREATE_ROUTE, ORGPROFILEPAGE_ROUTE,
    PERSONALSTUDENTS_ROUTE, PERSONALTICKET_ROUTE, PERSONALUSER_ROUTE,
    PROFILE_ROUTE, STATISTIC_ROUTE,
    STUDENTS_ROUTE,
    TICKET_ROUTE, TICKETCREATE_ROUTE, USERCREATE_ROUTE,
    USERS_ROUTE
} from "../consts";
import {ticketPage} from "../../pages/ticket/ticket";
import {homePage} from "../../pages/home/";
import {usersPage} from "../../pages/users/users";
import {orgPage} from "../../pages/org/org";
import {studentsPage} from "../../pages/students";
import {personalPageStudents} from "../../pages/personal/personalPageStudents";
import {profilePage} from "../../pages/profile";
import {ticketCreatePage} from "../../pages/ticket/ticketCreate";
import {personalPageOrg} from "../../pages/personal/personalPageOrg";
import {createOrgPage} from "../../pages/org/createOrg";
import {adminPage} from "../../pages/admin";
import {createUserPage} from "../../pages/users/createUser";
import {statisticPage} from "../../pages/statistic";
import {personalPageUser} from "../../pages/personal/personalPageUser";
import {personalPageTicket} from "../../pages/personal/personalPageTickets";
import {createStudentPage} from "../../pages/students/createStudent";

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
    },
    {
        path: ORGPROFILEPAGE_ROUTE,
        Component: personalPageOrg,
    },
    {
        path: ORGCREATE_ROUTE,
        Component: createOrgPage,
    },
    {
        path: ADMIN_ROUTE,
        Component: adminPage,
    },
    {
      path: USERCREATE_ROUTE,
      Component: createUserPage,
    },
    {
        path: STATISTIC_ROUTE,
        Component: statisticPage,
    },
    {
        path: PERSONALUSER_ROUTE,
        Component: personalPageUser,
    },
    {
        path: PERSONALTICKET_ROUTE,
        Component: personalPageTicket,
    },
    {
        path: CREATESTUDENT_ROUTE,
        Component: createStudentPage,
    }
];

export const UserRoutes = [
    {
        path: TICKET_ROUTE,
        Component: ticketPage,
    },
];
