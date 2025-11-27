const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const courseRoutes = require('./routes/courseRoutes');
const facultyRoutes = require('./routes/facultyRoutes');

app.use('/api/courses', courseRoutes);
app.use('/api/faculty', facultyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
  console.log(`Server running on port ${PORT}`);
});
