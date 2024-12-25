import React, { useState } from 'react';
import LeftMenu from '../../../../shared/leftMenu/ui/leftMenu.tsx';
import styles from './styles.module.css'; // Убедитесь, что путь к файлу правильный

export const createOrgPage: React.FC = () => {
    const [orgName, setOrgName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ orgName });
        setOrgName('');
    };

    return (
        <div className="flex min-h-screen bg-g
ray-100">
            <LeftMenu />
            <div className="flex-1 p-6">
                <h1 className="text-2xl font-semibold mb-6">Добавить организацию</h1>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="orgName">
                            Название организации
                        </label>
                        <input
                            id="orgName"
                            type="text"
                            value={orgName}
                            onChange={(e) => setOrgName(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Введите название организации"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Добавить организацию
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
