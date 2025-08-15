import { Router } from "express"
import { authenticateToken, authorizeRole } from "../middlewares/auth.js"
import { lessonController } from "../controllers/lessonController.js"

export const lessonRouter = Router()

lessonRouter.post('/add/course/:id', authenticateToken, authorizeRole('ADMIN'), lessonController.createLesson)
lessonRouter.delete('/delete/:id', authenticateToken, authorizeRole('ADMIN'), lessonController.deleteLesson)