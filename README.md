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

## 📸 Endpoints Overview

The following image shows an example of the documented API endpoints. Don´t forget to check out the [documentation](https://coursemanagerapp-production.up.railway.app/api-docs/) of this project.

![Courses Overview](https://console.cloudinary.com/app/c-3ed1cd4658e6a73165000b7b18229e/assets/media_library/folders/home/asset/8d5f7bdafa691d93be5829e9923bc273/manage/summary?view_mode=mosaic&context=manage)
![Lessons Overview](https://console.cloudinary.com/app/c-3ed1cd4658e6a73165000b7b18229e/assets/media_library/folders/home/asset/938850aaa6c5d20b8ec5aeb59b931f5d/manage/summary?view_mode=mosaic&context=manage)
![Auth Overview](https://console.cloudinary.com/app/c-3ed1cd4658e6a73165000b7b18229e/assets/media_library/folders/home/asset/978e115016c0e196167b15b800bc5e1c/manage/summary?view_mode=mosaic&context=manage)