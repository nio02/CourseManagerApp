# 📚 Course APP node project

This project is an **API REST** developed with **Node.js**, **Express** and **Prisma** as ORM for DB management.  
It's purpose is **user authentication**, as well as **management of courses and lessons**.

---

## 🚀 Main Features

- User authentication with JWT.
- Courses management (create, list all, update, delete).
- Lesson related to courses management.
- Use of **Prisma ORM** for MySQL database management.
- Migrations and seeding with Prisma.
- Middlewares for authentication and CORS.
- Configuration using environment variables.

---

## 📂 Project Structure

```bash


├── package.json           # Dependencies and scripts
├── prisma/                # Schemas and migrations 
│   ├── schema.prisma
│   ├── seed.js
│   └── migrations/
├── src/
│   ├── app.js             # Main configuration of the app
│   ├── server.js          # Server start point
│   ├── controllers/       
│   │   ├── authController.js
│   │   ├── courseController.js
│   │   └── lessonController.js
│   ├── middlewares/       # Middlewares of authentication and CORS
│   │   ├── auth.js
│   │   └── cors.js
│   ├── routes/            # API Routes
│   │   ├── auth.js
│   │   └── courses.js
│   ├── services/          # Business logic
│   │   ├── authService.js
│   │   ├── courseService.js
│   │   └── lessonService.js
│   └── utils/            # Querys builder functions
│       ├── courseQuerysUtils.js
│       └── courses.js
└── generated/prisma/      # Prisma Client

```
