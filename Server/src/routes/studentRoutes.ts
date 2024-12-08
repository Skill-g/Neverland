import { Router } from 'express';
import { getAllStudents, getStudentById } from '../controllers/studentController';

const router = Router();

/**
 * @route GET /api/students
 * @desc Получить всех студентов
 */
router.get('/', getAllStudents);

/**
 * @route GET /api/students/:id
 * @desc Получить студента по ID
 */
router.get('/:id', getStudentById);

// Дополнительные маршруты (POST, PUT, DELETE) можно добавить по необходимости

export default router;