import React, { useState } from 'react';
import LeftMenu from '../../../../shared/leftMenu/ui/leftMenu.tsx';

export const ticketCreatePage: React.FC = () => {
    const [student, setStudent] = useState('');
    const [date, setDate] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ student, date, additionalInfo });
        setStudent('');
        setDate('');
        setAdditionalInfo('');
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <LeftMenu />

            <div className="flex-1 p-6">
                <h1 className="text-2xl font-semibold mb-6">Создание Тикета</h1>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                    <div className="mb-6">
                        <label htmlFor="student" className="block text-gray-700 text-sm font-bold mb-2">
                            Студент
                        </label>
                        <select
                            id="student"
                            value={student}
                            onChange={(e) => setStudent(e.target.value)}
                            required
                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Выберите студента</option>
                            <option value="1">Иван Иванов</option>
                            <option value="2">Анна Смирнова</option>
                            <option value="3">Петр Петров</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
                            Дата
                        </label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="additionalInfo" className="block text-gray-700 text-sm font-bold mb-2">
                            Дополнительная информация
                        </label>
                        <input
                            type="text"
                            id="additionalInfo"
                            value={additionalInfo}
                            onChange={(e) => setAdditionalInfo(e.target.value)}
                            placeholder="Введите дополнительную информацию"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Создать тикет
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
