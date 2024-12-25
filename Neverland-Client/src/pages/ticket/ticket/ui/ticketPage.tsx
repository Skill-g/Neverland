import React from "react";
import styles from "./styles.module.css";
import LeftMenu from "../../../../shared/leftMenu/ui/leftMenu.tsx";
import TableWithSearch from "../../../../shared/tableWithSearch/ui/tableWithSearch.tsx";
import {ORGPROFILEPAGE_ROUTE, PERSONALTICKET_ROUTE} from "../../../../app/consts.ts";

interface Ticket {
    id: number;
    date: string;
    title: string;
    status: string;
    priority: string;
    [key: string]: React.ReactNode | string | number;
}

const ticketData: Ticket[] = [
    { id: 1, date: '12.12.2024', title: 'Заявка №1', status: 'Ожидает', priority: 'Колледж #1' },
    { id: 2, date: '13.12.2024', title: 'Заявка №2', status: 'В обработке', priority: 'Колледж #1' },
    { id: 3, date: '14.12.2024', title: 'Заявка №3', status: 'Закрыта', priority: 'Колледж #1' },
];

const ticketColumns = [
    { key: "date", label: "Дата" },
    { key: "title", label: "Название" },
    { key: "status", label: "Статус" },
    { key: "priority", label: "Организация" },
];

export const ticketPage: React.FC = () => {
    return (
        <div className="container-neverland">
            <LeftMenu />
            <div className={`w-full ${styles.containerRequests}`}>
                <TableWithSearch<Ticket>
                    data={ticketData}
                    columns={ticketColumns}
                    searchExcludeKeys={["id"]}
                    viewRoute={(id) => `${PERSONALTICKET_ROUTE}`}
                    editRoute={(id) => `/orgEditPage/${id}`}
                    deleteRoute={(id) => `/orgDeletePage/${id}`}
                />
            </div>
        </div>
    );
};

export default ticketPage;
