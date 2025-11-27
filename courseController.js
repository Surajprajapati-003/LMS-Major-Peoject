const pool = require('../db');

// Create course
exports.createCourse = async (req, res) => {
  try {
    const { name, description, duration } = req.body;
    if(!name) return res.status(400).json({ error: 'name is required' });
    const [result] = await pool.query(
      'INSERT INTO courses (name, description, duration) VALUES (?, ?, ?)',
      [name, description || null, duration || null]
    );
    const [created] = await pool.query('SELECT * FROM courses WHERE course_id = ?', [result.insertId]);
    res.status(201).json(created[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
};

// Get courses list
exports.listCourses = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT course_id, name, duration, created_at FROM courses ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
};

// Get course details with modules and faculties
exports.courseDetails = async (req, res) => {
  try {
    const courseId = req.params.id;
    const [[course]] = await pool.query('SELECT * FROM courses WHERE course_id = ?', [courseId]);
    if(!course) return res.status(404).json({ error: 'course not found' });

    const [modules] = await pool.query('SELECT module_id, module_name, module_description FROM modules WHERE course_id = ?', [courseId]);
    const [faculties] = await pool.query(
      `SELECT f.faculty_id, f.name, f.email, f.expertise
       FROM faculties f
       JOIN course_faculty cf ON cf.faculty_id = f.faculty_id
       WHERE cf.course_id = ?`,
      [courseId]
    );

    res.json({ ...course, modules, faculties });
  } catch(err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
};

// Delete course
exports.deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const [result] = await pool.query('DELETE FROM courses WHERE course_id = ?', [courseId]);
    if(result.affectedRows === 0) return res.status(404).json({ error: 'course not found' });
    res.json({ success: true });
  } catch(err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
};

// Create module for a course
exports.createModule = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const { module_name, module_description } = req.body;
    if(!module_name) return res.status(400).json({ error: 'module_name is required' });
    // verify course exists
    const [[course]] = await pool.query('SELECT course_id FROM courses WHERE course_id = ?', [courseId]);
    if(!course) return res.status(404).json({ error: 'course not found' });

    const [result] = await pool.query(
      'INSERT INTO modules (course_id, module_name, module_description) VALUES (?, ?, ?)',
      [courseId, module_name, module_description || null]
    );
    const [[created]] = await pool.query('SELECT * FROM modules WHERE module_id = ?', [result.insertId]);
    res.status(201).json(created);
  } catch(err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
};

// Assign faculty to course
exports.assignFaculty = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    const { faculty_id } = req.body;
    if(!faculty_id) return res.status(400).json({ error: 'faculty_id is required' });

    // check course & faculty
    const [[course]] = await pool.query('SELECT course_id FROM courses WHERE course_id = ?', [courseId]);
    if(!course) return res.status(404).json({ error: 'course not found' });
    const [[faculty]] = await pool.query('SELECT faculty_id FROM faculties WHERE faculty_id = ?', [faculty_id]);
    if(!faculty) return res.status(404).json({ error: 'faculty not found' });

    // insert mapping (ignore duplicates)
    await pool.query('INSERT IGNORE INTO course_faculty (course_id, faculty_id) VALUES (?, ?)', [courseId, faculty_id]);
    res.json({ success: true });
  } catch(err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
};
