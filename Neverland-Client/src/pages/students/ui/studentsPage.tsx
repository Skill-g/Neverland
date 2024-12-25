import React, { useState } from "react";
import styles from "../../ticket/ticket/ui/styles.module.css";
import LeftMenu from "../../../shared/leftMenu/ui/leftMenu.tsx";
import TableWithSearch from "../../../shared/tableWithSearch/ui/tableWithSearch.tsx";
import {PERSONALSTUDENTS_ROUTE} from "../../../app/consts.ts";

interface Parent {
    fullName: string;
    contact: string;
}

interface Student {
    id: number;
    fullName: string;
    dateOfBirth: string;
    idNumber: string;
    iin: string;
    phone: string;
    homeAddress: string;
    parents: Parent[];
    cityResidence: string;
    photo?: string;
}

type TableStudent = Pick<
    Student,
    "id" | "fullName" | "dateOfBirth" | "idNumber" | "iin" | "phone" | "homeAddress" | "cityResidence" | "photo"
>;

const studentColumns = [
    { key: "fullName", label: "ФИО" },
    { key: "dateOfBirth", label: "Дата рождения" },
    { key: "idNumber", label: "Номер удостоверения" },
    { key: "iin", label: "ИИН" },
    { key: "phone", label: "Номер телефона" },
];

const testStudents: Student[] = [
    {
        id: 1,
        fullName: "Иван Иванов Иванович",
        dateOfBirth: "2000-01-15",
        idNumber: "AB1234567",
        iin: "990101123456",
        phone: "+7 (900) 123-45-67",
        homeAddress: "г. Алматы, ул. Абылай хана, д. 10",
        parents: [
            { fullName: "Петр Иванов Иванович", contact: "+7 (900) 765-43-21" },
            { fullName: "Мария Иванова Ивановна", contact: "+7 (900) 765-43-22" },
        ],
        cityResidence: "Алматы",
        photo: "https://via.placeholder.com/150",
    }
];

export const studentsPage: React.FC = () => {
    const [students, setStudents] = useState<Student[]>(testStudents);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);


    if (loading) {
        return (
            <div className="container-neverland">
                <LeftMenu />
                <div className={`w-full ${styles.containerRequests}`}>
                    <p className="flex text-center w-full justify-center mt-12">Загрузка...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container-neverland">
                <LeftMenu />
                <div className={`w-full ${styles.containerRequests}`}>
                    <p className="flex text-center w-full justify-center mt-12">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container-neverland">
            <LeftMenu />
            <div className={`w-full ${styles.containerRequests}`}>
                <TableWithSearch<TableStudent>
                    data={students}
                    columns={studentColumns}
                    searchExcludeKeys={["id"]}
                    viewRoute={(id) => `${PERSONALSTUDENTS_ROUTE}`}
                    editRoute={(id) => `/orgEditPage/${id}`}
                    deleteRoute={(id) => `/orgDeletePage/${id}`}
                />
            </div>
        </div>
    );
};

export default studentsPage;
