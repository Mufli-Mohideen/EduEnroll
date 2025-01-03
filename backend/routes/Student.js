const express = require('express');
const { Student, Course } = require('../models');

const router = express.Router();

// Create Student
router.post('/students', async (req, res) => {
    const { name, email, nic, age, gender } = req.body;
    try {
        const student = await Student.create({ name, email, nic, age, gender });
        res.status(201).json(student);
    } catch (err) {
        console.error('Error creating student:', err);
        res.status(500).json({ message: 'Failed to create student', error: err });
    }
});

// Get Students with Courses
router.get('/students', async (req, res) => {
    try {
        const students = await Student.findAll({
            include: [{ model: Course, as: 'courses' }],
        });
        res.status(200).json(students);
    } catch (err) {
        console.error('Error fetching students:', err);
        res.status(500).json({ message: 'Failed to fetch students', error: err });
    }
});

module.exports = router;
