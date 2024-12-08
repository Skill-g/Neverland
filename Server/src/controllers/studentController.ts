import { Request, Response, NextFunction } from 'express';
import { Student } from '../models/student';

const students: Student[] = [
    {
        id: '1',
        fullName: 'Иванов Иван Иванович',
        dateOfBirth: '2000-01-01',
        idNumber: '123456789',
        iin: '987654321',
        phone: '+7 123 456-78-90',
        homeAddress: 'г. Алматы, ул. Ленина, д.1',
        parents: [
            { fullName: 'Иванов Сергей Петрович', contact: '+7 123 456-78-91' },
            { fullName: 'Иванова Мария Ивановна', contact: '+7 123 456-78-92' },
        ],
        cityResidence: 'г. Алматы',
    },
    // Можно добавить больше студентов
];

export const getAllStudents = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json(students);
    } catch (error) {
        next(error);
    }
};

export const getStudentById = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const student = students.find(s => s.id === id);
        if (!student) {
            res.status(404).json({ message: 'Студент не найден' });
            return;
        }
        res.json(student);
    } catch (error) {
        next(error);
    }
};