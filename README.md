# 📚 Course APP node project

This project is an **API REST** developed with **Node.js**, **Express** and **Prisma** as ORM for DB management.  
It's purpose is **autenticación de usuarios**, así como la **gestión de cursos y lecciones**.

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


├── package.json           # Dependencias y scripts
├── prisma/                # Esquemas y migraciones de base de datos
│   ├── schema.prisma
│   ├── seed.js
│   └── migrations/
├── src/
│   ├── app.js             # Configuración principal de la app
│   ├── server.js          # Punto de arranque del servidor
│   ├── controllers/       # Lógica de negocio
│   │   ├── authController.js
│   │   ├── courseController.js
│   │   └── lessonController.js
│   ├── middlewares/       # Middlewares de autenticación y CORS
│   │   ├── auth.js
│   │   └── cors.js
│   └── routes/            # Rutas de la API
│       ├── auth.js
│       └── courses.js
└── generated/prisma/      # Cliente generado de Prisma

```
