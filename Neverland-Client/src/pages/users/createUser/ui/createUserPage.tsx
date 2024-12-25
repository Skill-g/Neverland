import React, { useState } from 'react';
import LeftMenu from '../../../../shared/leftMenu/ui/leftMenu.tsx';

export const createUserPage: React.FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Employee'); // Значение по умолчанию

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log({ login, password, role });
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <LeftMenu />

            <div className="flex-1 p-6">
                <h1 className="text-2xl font-semibold mb-6">Добавить пользователя</h1>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="login">
                            Логин
                        </label>
                        <input
                            id="login"
                            type="text"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Введите логин"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Пароль
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Введите пароль"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                            Роль
                        </label>
                        <select
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="Administrator">Администратор</option>
                            <option value="EducationalOrganization">Учебная организация</option>
                            <option value="Employee">Сотрудник</option>
                        </select>
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Добавить пользователя
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
