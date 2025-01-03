const express = require('express');
const { Course, Student } = require('../models');

const router = express.Router();

// Create Course for a Student
router.post('/courses', async (req, res) => {
    const { title, studentId } = req.body;
    try {
        const course = await Course.create({ title, studentId });
        res.status(201).json(course);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get All Courses
router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.findAll({ include: [{ model: Student, as: 'student' }] });
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
