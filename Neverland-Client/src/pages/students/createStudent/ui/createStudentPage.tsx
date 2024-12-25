import React, { useState } from 'react';
import LeftMenu from '../../../../shared/leftMenu/ui/leftMenu.tsx';

export const createStudentPage: React.FC = () => {
    const [organization, setOrganization] = useState('');
    const [fullName, setFullName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [iin, setIin] = useState('');
    const [phone, setPhone] = useState('');
    const [homeAddress, setHomeAddress] = useState('');
    const [parent1Name, setParent1Name] = useState('');
    const [parent1Contact, setParent1Contact] = useState('');
    const [parent2Name, setParent2Name] = useState('');
    const [parent2Contact, setParent2Contact] = useState('');
    const [residenceCity, setResidenceCity] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const studentData = {
            organization,
            fullName,
            birthDate,
            idNumber,
            iin,
            phone,
            homeAddress,
            parents: [
                { name: parent1Name, contact: parent1Contact },
                { name: parent2Name, contact: parent2Contact },
            ],
            residenceCity,
        };
        console.log('Созданный студент:', studentData);
        setOrganization('');
        setFullName('');
        setBirthDate('');
        setIdNumber('');
        setIin('');
        setPhone('');
        setHomeAddress('');
        setParent1Name('');
        setParent1Contact('');
        setParent2Name('');
        setParent2Contact('');
        setResidenceCity('');
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <LeftMenu />

            <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-6">Создание Студента</h1>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organization">
                            Организация
                        </label>
                        <select
                            id="organization"
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Выберите организацию</option>
                            <option value="Организация А">Организация А</option>
                            <option value="Организация Б">Организация Б</option>
                            <option value="Организация В">Организация В</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                            ФИО
                        </label>
                        <input
                            id="fullName"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            placeholder="Введите полное имя"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthDate">
                            Дата рождения
                        </label>
                        <input
                            id="birthDate"
                            type="date"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="idNumber">
                            Номер удостоверения личности
                        </label>
                        <input
                            id="idNumber"
                            type="text"
                            value={idNumber}
                            onChange={(e) => setIdNumber(e.target.value)}
                            required
                            placeholder="Введите номер удостоверения личности"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="iin">
                            ИИН
                        </label>
                        <input
                            id="iin"
                            type="text"
                            value={iin}
                            onChange={(e) => setIin(e.target.value)}
                            required
                            placeholder="Введите ИИН"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Телефон
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            placeholder="Введите номер телефона"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="homeAddress">
                            Домашний адрес
                        </label>
                        <input
                            id="homeAddress"
                            type="text"
                            value={homeAddress}
                            onChange={(e) => setHomeAddress(e.target.value)}
                            required
                            placeholder="Введите домашний адрес"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="parent1Name">
                            ФИО Родителя 1
                        </label>
                        <input
                            id="parent1Name"
                            type="text"
                            value={parent1Name}
                            onChange={(e) => setParent1Name(e.target.value)}
                            required
                            placeholder="Введите ФИО первого родителя"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="parent1Contact">
                            Контакт Родителя 1
                        </label>
                        <input
                            id="parent1Contact"
                            type="tel"
                            value={parent1Contact}
                            onChange={(e) => setParent1Contact(e.target.value)}
                            required
                            placeholder="Введите контактные данные первого родителя"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="parent2Name">
                            ФИО Родителя 2
                        </label>
                        <input
                            id="parent2Name"
                            type="text"
                            value={parent2Name}
                            onChange={(e) => setParent2Name(e.target.value)}
                            required
                            placeholder="Введите ФИО второго родителя"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="parent2Contact">
                            Контакт Родителя 2
                        </label>
                        <input
                            id="parent2Contact"
                            type="tel"
                            value={parent2Contact}
                            onChange={(e) => setParent2Contact(e.target.value)}
                            required
                            placeholder="Введите контактные данные второго родителя"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="residenceCity">
                            Место жительства в городе
                        </label>
                        <input
                            id="residenceCity"
                            type="text"
                            value={residenceCity}
                            onChange={(e) => setResidenceCity(e.target.value)}
                            required
                            placeholder="Введите место жительства в городе"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Создать студента
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
