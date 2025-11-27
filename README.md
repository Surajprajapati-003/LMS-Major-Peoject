# Course Management API

Simple Node.js + Express + MySQL API for Courses, Faculties and Modules.

## Setup

1. Copy `.env.example` to `.env` and fill DB credentials.
2. Install dependencies:
   ```
   npm install
   ```
3. Create the database and tables:
   ```
   mysql -u root -p < sql/schema.sql
   ```
4. Start server:
   ```
   npm run dev
   ```

## Endpoints (summary)

### Courses
- POST /api/courses
- GET /api/courses
- GET /api/courses/:id
- DELETE /api/courses/:id
- POST /api/courses/:courseId/modules
- POST /api/courses/:courseId/faculty

### Faculty
- POST /api/faculty
- GET /api/faculty
- GET /api/faculty/:id
- DELETE /api/faculty/:id

### Modules
- (created via course module endpoint)

