import { Router } from "express"
import { authRouter } from "./auth.js"
import { courseRouter } from "./courses.js"

export const router = Router()

router.use('/auth', authRouter)
router.use('/courses', courseRouter)