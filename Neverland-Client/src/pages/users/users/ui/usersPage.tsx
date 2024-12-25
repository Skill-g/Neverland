import LeftMenu from "../../../../shared/leftMenu/ui/leftMenu.tsx";
import styles from "../../../ticket/ticket/ui/styles.module.css";
import TableWithSearch from "../../../../shared/tableWithSearch/ui/tableWithSearch.tsx";
import React from "react";
import {ORGPROFILEPAGE_ROUTE, PERSONALUSER_ROUTE} from "../../../../app/consts.ts";

interface Users {
    id: number;
    username: string;
    rights: string;
    [key: string]: React.ReactNode | string | number;
}



const UsersData = [
    { id: 1, username: 'Сотрудник №1', rights: "Администратор" },
    { id: 2, username: 'Сотрудник №2', rights: "Пользователь"},
    { id: 3, username: 'Сотрудник №3', rights: "Пользователь"}
];

const UsersColumns = [
    { key: "username", label: "Имя пользователя" },
    { key: "rights", label: "Права пользователя" },
];

export const usersPage = () => {
    return (
        <div className="container-neverland">
            <LeftMenu></LeftMenu>
            <div className={`w-full ${styles.containerRequests}`}>
                <TableWithSearch<Users>
                    data={UsersData}
                    columns={UsersColumns}
                    searchExcludeKeys={["id"]}
                    viewRoute={(id) => `${PERSONALUSER_ROUTE}`}
                    editRoute={(id) => `/orgEditPage/${id}`}
                    deleteRoute={(id) => `/orgDeletePage/${id}`}
                />
            </div>
        </div>
    );
};

export default usersPage;
