import express from 'express';
const router = express.Router();

import {getStudents, getStudentById, createStudent, updateStudent, deleteStudent} from '../controllers/studentsController.js';

router.route('/').get(getStudents);

router.route('/:id').get(getStudentById);

router.route('/').post(createStudent);

router.route('/:id').patch(updateStudent);

router.route('/:id').delete(deleteStudent);

export default router;