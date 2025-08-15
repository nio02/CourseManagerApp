import { Router } from "express"
import { authRouter } from "./auth.js"
import { courseRouter } from "./courses.js"
import { lessonRouter } from "./lessons.js"

export const router = Router()

router.use('/auth', authRouter)
router.use('/courses', courseRouter)
router.use('/lessons', lessonRouter)