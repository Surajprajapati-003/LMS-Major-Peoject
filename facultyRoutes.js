const express = require('express');
const router = express.Router();
const facultyCtrl = require('../controllers/facultyController');

// /api/faculty
router.post('/', facultyCtrl.createFaculty);
router.get('/', facultyCtrl.listFaculties);
router.get('/:id', facultyCtrl.facultyDetails);
router.delete('/:id', facultyCtrl.deleteFaculty);

module.exports = router;
