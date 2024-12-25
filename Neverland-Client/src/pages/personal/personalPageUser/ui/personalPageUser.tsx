import React from 'react';
import LeftMenu from '../../../../shared/leftMenu/ui/leftMenu.tsx';

export const personalPageUser: React.FC = () => {
    const user = {
        id: 1,
        avatarUrl: 'https://via.placeholder.com/150',
        fullName: 'Иван Иванов Иванович',
        role: 'Администратор',
        description: 'Этот раздел содержит подробную информацию о пользователе, включая его обязанности, достижения и другие важные детали.',
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <LeftMenu />

            <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-6">Персональная страница пользователя</h1>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="flex items-center mb-6">
                        <img
                            src={user.avatarUrl}
                            alt="Аватар пользователя"
                            className="w-24 h-24 rounded-full mr-6 object-cover"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold">{user.fullName}</h2>
                            <p className="text-gray-600">{user.role}</p>
                            <p className="text-gray-500">ID профиля: {user.id}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Описание</h3>
                        <p className="text-gray-700">{user.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
