import React from 'react';
import LeftMenu from '../../../../shared/leftMenu/ui/leftMenu.tsx';
import { useNavigate } from 'react-router-dom';

export const personalPageTicket: React.FC = () => {
    const navigate = useNavigate();

    const ticket = {
        id: 1,
        creationDate: '2024-04-25',
        student: {
            id: 1,
            fullName: 'Иван Иванов Иванович',
            email: 'ivan.ivanov@example.com',
        },
        description: 'Нарушение дисциплины: опоздание на занятия более 3 раз за месяц.',
        status: 'Открыто', // Возможные значения: 'Открыто', 'В процессе', 'Закрыто'
        additionalInfo: 'Требуется встреча с куратором для обсуждения ситуации.',
    };

    const handleChangeStatus = (newStatus: string) => {
        console.log(`Изменение статуса тикета ${ticket.id} на ${newStatus}`);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <LeftMenu />

            <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-6">Персональная страница нарушения</h1>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="flex flex-col md:flex-row items-center mb-6">
                        <div className="mb-4 md:mb-0">
                            <span className="text-gray-500">ID Тикета:</span>
                            <span className="text-xl font-semibold ml-2">{ticket.id}</span>
                        </div>

                        <div className="mb-4 md:mb-0 md:ml-6">
                            <span className="text-gray-500">Дата создания:</span>
                            <span className="text-xl font-semibold ml-2">{ticket.creationDate}</span>
                        </div>

                        <div className="md:ml-auto">
                            <span className="text-gray-500">Статус:</span>
                            <span className={`text-xl font-semibold ml-2 ${ticket.status === 'Открыто' ? 'text-red-500' : ticket.status === 'В процессе' ? 'text-yellow-500' : 'text-green-500'}`}>
                {ticket.status}
              </span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Студент</h2>
                        <p className="text-gray-700">Имя: {ticket.student.fullName}</p>
                        <p className="text-gray-700">Электронная почта: {ticket.student.email}</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Описание нарушения</h2>
                        <p className="text-gray-700">{ticket.description}</p>
                    </div>

                    {ticket.additionalInfo && (
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold mb-2">Дополнительная информация</h2>
                            <p className="text-gray-700">{ticket.additionalInfo}</p>
                        </div>
                    )}

                    <div className="flex space-x-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => navigate(`/tickets/${ticket.id}/edit`)}
                        >
                            Редактировать
                        </button>
                        <button
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleChangeStatus('В процессе')}
                        >
                            Начать обработку
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleChangeStatus('Закрыто')}
                        >
                            Закрыть тикет
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
