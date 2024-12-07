import React from "react";
import styles from "../../ticket/ui/styles.module.css";
import LeftMenu from "../../../shared/leftMenu/ui/leftMenu.tsx";
import TableWithSearch from "../../../shared/tableWithSearch/ui/tableWithSearch.tsx";

interface Student {
    id: number;
    dob: string;
    fullName: string;
    certificate: string;
    tel: string;
    [key: string]: React.ReactNode | string | number;
}

const studentsData: Student[] = [
    { id: 1, dob: '12.12.2024', fullName: 'Иванов Сергей Петрович', certificate: '050008693493', tel: '7705281459' },
    { id: 2, dob: '13.12.2024', fullName: 'Смирнова Анна Викторовна', certificate: '050008693493', tel: '7705281459' },
    { id: 3, dob: '14.12.2024', fullName: 'Кузнецова Мария Александровна', certificate: '050008693493', tel: '7705281459' },
];

const studentColumns = [
    { key: "fullName", label: "ФИО" },
    { key: "dob", label: "Дата рождения" },
    { key: "certificate", label: "Номер удостоверения" },
    { key: "tel", label: "Номер телефона" },
];

export const studentsPage: React.FC = () => {
    return (
        <div className="container-neverland">
            <LeftMenu />
            <div className={`w-full ${styles.containerRequests}`}>
                <TableWithSearch<Student>
                    data={studentsData}
                    columns={studentColumns}
                    searchExcludeKeys={["id"]}
                />
            </div>
        </div>
    );
};

export default studentsPage;
