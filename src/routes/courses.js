import { Router } from "express"
import { courseController } from "../controllers/courseController.js"
import { authenticateToken, authorizeRole } from "../middlewares/auth.js"

export const courseRouter = Router()

courseRouter.get('/', courseController.getAllCourses)
courseRouter.get('/user', authenticateToken , courseController.getAllUserCourses)
courseRouter.get('/:id', courseController.getCourseById)
courseRouter.post('/create', authenticateToken, authorizeRole('ADMIN'), courseController.createNewCourse)
courseRouter.delete('/delete/:id', authenticateToken, authorizeRole('ADMIN'), courseController.deleteCourse)
courseRouter.put('/update/:id', authenticateToken, authorizeRole('ADMIN'), courseController.updateCourse)