const express = require('express');
const router = express.Router();
const courseCtrl = require('../controllers/courseController');

// /api/courses
router.post('/', courseCtrl.createCourse);
router.get('/', courseCtrl.listCourses);
router.get('/:id', courseCtrl.courseDetails);
router.delete('/:id', courseCtrl.deleteCourse);

// modules and faculty assignment
router.post('/:courseId/modules', courseCtrl.createModule);
router.post('/:courseId/faculty', courseCtrl.assignFaculty);

module.exports = router;
