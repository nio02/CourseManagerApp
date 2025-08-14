import { PrismaClient, Role, ProgressState } from "../generated/prisma/client.js"

const prisma = new PrismaClient()

async function main() {
    // 1️⃣ Crear usuarios
  // const users = await prisma.user.createMany({
  //   data: [
  //     { name: 'Ana López', birthdate: new Date('1990-01-10'), email: 'ana@example.com', password: 'pass123', role: Role.ADMIN },
  //     { name: 'Luis Pérez', birthdate: new Date('1995-05-20'), email: 'luis@example.com', password: 'pass123', role: Role.STUDENT },
  //     { name: 'María García', birthdate: new Date('1988-09-12'), email: 'maria@example.com', password: 'pass123', role: Role.STUDENT },
  //     { name: 'Carlos Ruiz', birthdate: new Date('1993-02-15'), email: 'carlos@example.com', password: 'pass123', role: Role.STUDENT },
  //     { name: 'Sofía Hernández', birthdate: new Date('1998-07-25'), email: 'sofia@example.com', password: 'pass123', role: Role.STUDENT },
  //   ]
  // });

  // 2️⃣ Crear cursos
  // const coursesData = [
  //   {
  //     title: 'Curso de Finanzas',
  //     logo: 'logo-finanzas.png',
  //     description: 'Aprende a manejar tus finanzas personales',
  //     postDate: new Date('2023-01-05'),
  //     introVideo: 'https://youtu.be/finanzas',
  //   },
  //   {
  //     title: 'Curso de Programación',
  //     logo: 'logo-programacion.png',
  //     description: 'Programación desde cero en JavaScript',
  //     postDate: new Date('2023-02-10'),
  //     introVideo: 'https://youtu.be/programacion',
  //   },
  //   {
  //     title: 'Curso de Marketing',
  //     logo: 'logo-marketing.png',
  //     description: 'Estrategias de marketing digital',
  //     postDate: new Date('2023-03-12'),
  //     introVideo: 'https://youtu.be/marketing',
  //   },
  //   {
  //     title: 'Curso de Inglés',
  //     logo: 'logo-ingles.png',
  //     description: 'Inglés básico para principiantes',
  //     postDate: new Date('2023-04-15'),
  //     introVideo: 'https://youtu.be/ingles',
  //   },
  //   {
  //     title: 'Curso de Fotografía',
  //     logo: 'logo-fotografia.png',
  //     description: 'Fotografía profesional con cámara y móvil',
  //     postDate: new Date('2023-05-18'),
  //     introVideo: 'https://youtu.be/fotografia',
  //   },
  // ];
  // const courses = await prisma.course.createMany({ data: coursesData });

  // 3️⃣ Crear lecciones (5 en total, 1 para cada curso)
  // const lessonsData = [
  //   { title: 'Intro Finanzas', description: 'Lección introductoria de finanzas', video: 'video1.mp4', idCourse: 1 },
  //   { title: 'Intro Programación', description: 'Lección introductoria de programación', video: 'video2.mp4', idCourse: 2 },
  //   { title: 'Intro Marketing', description: 'Lección introductoria de marketing', video: 'video3.mp4', idCourse: 3 },
  //   { title: 'Intro Inglés', description: 'Lección introductoria de inglés', video: 'video4.mp4', idCourse: 4 },
  //   { title: 'Intro Fotografía', description: 'Lección introductoria de fotografía', video: 'video5.mp4', idCourse: 5 },
  // ];
  // await prisma.lesson.createMany({ data: lessonsData });

  // 4️⃣ Crear progreso de cursos (para 5 combinaciones usuario-curso)
  // const courseProgressData = [
  //   { idUser: 2, idCourse: 1, state: ProgressState.COMPLETED, approvedDate: new Date() },
  //   { idUser: 3, idCourse: 2, state: ProgressState.PROGRESS },
  //   { idUser: 4, idCourse: 3, state: ProgressState.PENDING },
  //   { idUser: 5, idCourse: 4, state: ProgressState.PROGRESS },
  //   { idUser: 2, idCourse: 5, state: ProgressState.PENDING },
  // ];
  // await prisma.courseProgress.createMany({ data: courseProgressData });

  // 5️⃣ Crear progreso de lecciones (5 registros)
  // const lessonProgressData = [
  //   { idUser: 2, idLesson: 1, state: ProgressState.COMPLETED },
  //   { idUser: 3, idLesson: 2, state: ProgressState.PROGRESS },
  //   { idUser: 4, idLesson: 3, state: ProgressState.PENDING },
  //   { idUser: 5, idLesson: 4, state: ProgressState.COMPLETED },
  //   { idUser: 2, idLesson: 5, state: ProgressState.PENDING },
  // ];
  // await prisma.lessonProgress.createMany({ data: lessonProgressData });

  // 4️⃣ Crear progreso de cursos (para 5 combinaciones usuario-curso)
  const courseProgressData = [
    { idUser: 6, idCourse: 1, state: ProgressState.COMPLETED, approvedDate: new Date() },
    { idUser: 6, idCourse: 2, state: ProgressState.PROGRESS },
    { idUser: 6, idCourse: 3, state: ProgressState.PENDING },
    { idUser: 7, idCourse: 4, state: ProgressState.PROGRESS },
    { idUser: 7, idCourse: 5, state: ProgressState.PENDING },
  ];
  await prisma.courseProgress.createMany({ data: courseProgressData });

  // 5️⃣ Crear progreso de lecciones (5 registros)
  const lessonProgressData = [
    { idUser: 6, idLesson: 1, state: ProgressState.COMPLETED },
    { idUser: 6, idLesson: 2, state: ProgressState.PROGRESS },
    { idUser: 6, idLesson: 3, state: ProgressState.PENDING },
    { idUser: 7, idLesson: 4, state: ProgressState.COMPLETED },
    { idUser: 7, idLesson: 5, state: ProgressState.PENDING },
  ];
  await prisma.lessonProgress.createMany({ data: lessonProgressData });

  console.log('✅ Seed completado con éxito');
}

main()