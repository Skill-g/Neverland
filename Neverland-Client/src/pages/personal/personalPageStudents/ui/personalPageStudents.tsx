import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LeftMenu from "../../../../shared/leftMenu/ui/leftMenu.tsx";
import axios from "axios";
import { BACKEND_URL } from "../../../../app/consts.ts";
import styles from "./styles.module.css";

interface Parent {
    fullName: string;
    contact: string;
}

interface Student {
    id: string;
    fullName: string;
    dateOfBirth: string;
    idNumber: string;
    iin: string;
    phone: string;
    homeAddress: string;
    parents: Parent[];
    cityResidence: string;
    photo: string;
}

export const personalPageStudents: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [student, setStudent] = useState<Student | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get<Student>(`${BACKEND_URL}/api/students/${id}`);
                setStudent(response.data);
            } catch (err) {
                setError("Не удалось загрузить данные студента.");
            } finally {
                setLoading(false);
            }
        };

        fetchStudent();
    }, [id]);

    if (loading) {
        return <div className={styles.loading}>Загрузка...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    if (!student) {
        return <div className={styles.notFound}>Студент не найден.</div>;
    }

    return (
        <div className="container-neverland">
            <LeftMenu />
            <div className={styles.studentDetailsContainer}>
                <div className={styles.studentPhoto}>
                    <img src={student.photo || "https://via.placeholder.com/200"} alt={student.fullName} />
                </div>
                <div className={styles.studentDetails}>
                    <h1>Персональная информация студента</h1>
                    <p><strong>ФИО:</strong> {student.fullName}</p>
                    <p><strong>Дата рождения:</strong> {student.dateOfBirth}</p>
                    <p><strong>Номер удостоверения:</strong> {student.idNumber}</p>
                    <p><strong>ИИН:</strong> {student.iin}</p>
                    <p><strong>Телефон:</strong> {student.phone}</p>
                    <p><strong>Домашний адрес:</strong> {student.homeAddress}</p>
                    <p><strong>Место жительства в городе:</strong> {student.cityResidence}</p>

                    <h2>Информация о родителях</h2>
                    {student.parents.map((parent, index) => (
                        <div key={index} className={styles.parentInfo}>
                            <p><strong>ФИО родителя:</strong> {parent.fullName}</p>
                            <p><strong>Контакты:</strong> {parent.contact}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default personalPageStudents;
