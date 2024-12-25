import React, { useState, useEffect } from "react";
import LeftMenu from "../../../../shared/leftMenu/ui/leftMenu.tsx";
import styles from "./styles.module.css";

interface Parent {
    fullName: string;
    contact: string;
}

interface Violation {
    id: number;
    date: string;
    category: string;
    description: string;
    status: string;
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
    violations: Violation[];
}

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
        violations: [
            {
                id: 1,
                date: "2023-01-10",
                category: "Опоздание",
                description: "Опоздал на занятие на 15 минут.",
                status: "Закрыто",
            },
            {
                id: 2,
                date: "2023-03-22",
                category: "Неуважение",
                description: "Неприемлемое поведение в классе.",
                status: "В процессе",
            },
            {
                id: 3,
                date: "2023-05-15",
                category: "Отсутствие",
                description: "Пропустил занятия без уважительной причины.",
                status: "Открыто",
            },
        ],
    },
    {
        id: 2,
        fullName: "Мария Петрова Сергеевна",
        dateOfBirth: "1999-05-20",
        idNumber: "CD2345678",
        iin: "990520234567",
        phone: "+7 (901) 234-56-78",
        homeAddress: "г. Нур-Султан, пр. Республики, д. 20",
        parents: [
            { fullName: "Сергей Петров Петрович", contact: "+7 (901) 876-54-32" },
            { fullName: "Елена Петрова Петровна", contact: "+7 (901) 876-54-33" },
        ],
        cityResidence: "Нур-Султан",
        photo: "https://via.placeholder.com/150",
        violations: [
            {
                id: 4,
                date: "2023-02-14",
                category: "Неуважение",
                description: "Высказался неприемлемо в отношении преподавателя.",
                status: "Закрыто",
            },
            {
                id: 5,
                date: "2023-04-18",
                category: "Опоздание",
                description: "Опоздал на экзамен на 10 минут.",
                status: "В процессе",
            },
        ],
    },
];

export const personalPageStudents: React.FC = () => {
    const [student] = useState<Student>(testStudents[0]);

    return (
        <div className="container-neverland">
            <LeftMenu />
            <div className={styles.studentDetailsContainer}>
                {/* Фото студента */}
                <div className={styles.studentPhoto}>
                    <img src={student.photo || "https://via.placeholder.com/200"} alt={student.fullName} />
                </div>

                {/* Детали студента */}
                <div className={styles.studentDetails}>
                    <h1 className="text-3xl font-bold mb-4">Персональная информация студента</h1>
                    <p><strong>ФИО:</strong> {student.fullName}</p>
                    <p><strong>Дата рождения:</strong> {student.dateOfBirth}</p>
                    <p><strong>Номер удостоверения:</strong> {student.idNumber}</p>
                    <p><strong>ИИН:</strong> {student.iin}</p>
                    <p><strong>Телефон:</strong> {student.phone}</p>
                    <p><strong>Домашний адрес:</strong> {student.homeAddress}</p>
                    <p><strong>Место жительства в городе:</strong> {student.cityResidence}</p>

                    <h2 className="mt-6 text-xl font-semibold">Информация о родителях</h2>
                    {student.parents.map((parent, index) => (
                        <div key={index} className={styles.parentInfo}>
                            <p><strong>ФИО родителя:</strong> {parent.fullName}</p>
                            <p><strong>Контакты:</strong> {parent.contact}</p>
                        </div>
                    ))}

                    <h2 className="mt-6 text-xl font-semibold">История Нарушений</h2>
                    {student.violations.length > 0 ? (
                        <table className="min-w-full bg-white mt-4">
                            <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Дата</th>
                                <th className="py-2 px-4 border-b">Категория</th>
                                <th className="py-2 px-4 border-b">Описание</th>
                                <th className="py-2 px-4 border-b">Статус</th>
                            </tr>
                            </thead>
                            <tbody className="text-center">
                            {student.violations.map((violation) => (
                                <tr key={violation.id} className="hover:bg-gray-100">
                                    <td className="py-2 px-4 border-b">{violation.date}</td>
                                    <td className="py-2 px-4 border-b">{violation.category}</td>
                                    <td className="py-2 px-4 border-b">{violation.description}</td>
                                    <td className="py-2 px-4 border-b">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs ${
                                                    violation.status === "Закрыто"
                                                        ? "bg-green-200 text-green-800"
                                                        : violation.status === "В процессе"
                                                            ? "bg-yellow-200 text-yellow-800"
                                                            : "bg-red-200 text-red-800"
                                                }`}
                                            >
                                                {violation.status}
                                            </span>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="mt-4 text-gray-600">Нет нарушений.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default personalPageStudents;
