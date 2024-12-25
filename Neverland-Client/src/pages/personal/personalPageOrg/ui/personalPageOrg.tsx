import React, { useEffect, useState } from 'react';
import LeftMenu from '../../../../shared/leftMenu/ui/leftMenu.tsx';

interface Student {
    id: number;
    name: string;
    email: string;
}

interface Organization {
    id: number;
    name: string;
    studentCount: number;
    students: Student[];
}

export const personalPageOrg: React.FC = () => {
    const [organization, setOrganization] = useState<Organization | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchOrganizationData = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));

                const data: Organization = {
                    id: 1,
                    name: 'ООО "Учебная Организация"',
                    studentCount: 3,
                    students: [
                        { id: 1, name: 'Иван Иванов', email: 'ivan.ivanov@example.com' },
                        { id: 2, name: 'Анна Смирнова', email: 'anna.smirnova@example.com' },
                        { id: 3, name: 'Петр Петров', email: 'petr.petrov@example.com' },
                    ],
                };

                setOrganization(data);
                setLoading(false);
            } catch (err) {
                setError('Не удалось загрузить данные организации.');
                setLoading(false);
            }
        };

        fetchOrganizationData();
    }, []);

    if (loading) {
        return (
            <div className="flex min-h-screen bg-gray-100">
                <LeftMenu />
                <div className="flex-1 flex items-center justify-center">
                    <p className="text-gray-700 text-lg">Загрузка...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-screen bg-gray-100">
                <LeftMenu />
                <div className="flex-1 flex items-center justify-center">
                    <p className="text-red-500 text-lg">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-gray-100">
            <LeftMenu />

            <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-4">Персональная страница организации</h1>

                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Название организации</h2>
                    <p className="text-gray-700">{organization?.name}</p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Количество студентов</h2>
                    <p className="text-gray-700">{organization?.studentCount}</p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Список студентов</h2>
                    {organization?.students.length ? (
                        <div className="overflow-x-auto text-center">
                            <table className="min-w-full bg-white">
                                <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b">ID</th>
                                    <th className="py-2 px-4 border-b">Имя</th>
                                    <th className="py-2 px-4 border-b">Электронная почта</th>
                                </tr>
                                </thead>
                                <tbody>
                                {organization?.students.map((student) => (
                                    <tr key={student.id} className="hover:bg-gray-100">
                                        <td className="py-2 px-4 border-b text-center">{student.id}</td>
                                        <td className="py-2 px-4 border-b">{student.name}</td>
                                        <td className="py-2 px-4 border-b">{student.email}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="text-gray-700">Нет прикрепленных студентов.</p>
                    )}
                </div>
            </div>
        </div>
    );
};
