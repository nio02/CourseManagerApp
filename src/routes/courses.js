import { Router } from "express"
import { courseController } from "../controllers/courseController.js"
import { authenticateToken } from "../middlewares/auth.js"

export const courseRouter = Router()

courseRouter.get('/', courseController.getAllCourses)
courseRouter.get('/user', authenticateToken , courseController.getAllUserCourses)
courseRouter.get('/{id}', courseController.getCourseById)
courseRouter.get('/{id}/user', courseController.getCourseById)