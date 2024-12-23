import React, { useEffect, useState } from "react";
import styles from "../../ticket/ticket/ui/styles.module.css";
import LeftMenu from "../../../shared/leftMenu/ui/leftMenu.tsx";
import TableWithSearch from "../../../shared/tableWithSearch/ui/tableWithSearch.tsx";
import axios from "axios";
import { BACKEND_URL } from "../../../app/consts.ts";

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

type TableStudent = Pick<Student, 'id' | 'fullName' | 'dateOfBirth' | 'idNumber' | 'iin' | 'phone' | 'homeAddress' | 'cityResidence' | 'photo'>;

const studentColumns = [
    { key: 'fullName', label: 'ФИО' },
    { key: 'dateOfBirth', label: 'Дата рождения' },
    { key: 'idNumber', label: 'Номер удостоверения' },
    { key: 'iin', label: 'ИИН' },
    { key: 'phone', label: 'Номер телефона' },
];

export const studentsPage: React.FC = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get<Student[]>(`${BACKEND_URL}/api/students/`);
                setStudents(response.data);
            } catch {
                setError("Не удалось загрузить данные студентов.");
            } finally {
                setLoading(false);
            }
        };
        fetchStudents();
    }, []);

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
                />
            </div>
        </div>
    );
};