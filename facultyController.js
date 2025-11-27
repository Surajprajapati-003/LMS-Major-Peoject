const pool = require('../db');

// Create faculty
exports.createFaculty = async (req, res) => {
  try {
    const { name, email, expertise } = req.body;
    if(!name) return res.status(400).json({ error: 'name is required' });
    const [result] = await pool.query(
      'INSERT INTO faculties (name, email, expertise) VALUES (?, ?, ?)',
      [name, email || null, expertise || null]
    );
    const [[created]] = await pool.query('SELECT * FROM faculties WHERE faculty_id = ?', [result.insertId]);
    res.status(201).json(created);
  } catch(err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
};

// List faculties
exports.listFaculties = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT faculty_id, name, email, expertise, created_at FROM faculties ORDER BY created_at DESC');
    res.json(rows);
  } catch(err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
};

// Faculty details (with courses they teach)
exports.facultyDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const [[faculty]] = await pool.query('SELECT * FROM faculties WHERE faculty_id = ?', [id]);
    if(!faculty) return res.status(404).json({ error: 'faculty not found' });

    const [courses] = await pool.query(
      `SELECT c.course_id, c.name, c.duration
       FROM courses c
       JOIN course_faculty cf ON cf.course_id = c.course_id
       WHERE cf.faculty_id = ?`,
      [id]
    );

    res.json({ ...faculty, courses });
  } catch(err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
};

// Delete faculty
exports.deleteFaculty = async (req, res) => {
  try {
    const id = req.params.id;
    const [result] = await pool.query('DELETE FROM faculties WHERE faculty_id = ?', [id]);
    if(result.affectedRows === 0) return res.status(404).json({ error: 'faculty not found' });
    res.json({ success: true });
  } catch(err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
};
