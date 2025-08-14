import { courseService } from "../services/courseService.js"

export class courseController {
    static async getAllCourses(req, res){
        try {
            const data = await courseService.getCourses(req.query)

            return res.status(200).json(data)
        } catch (e) {
            res.status(400).json({ error: e.message})
        }
    }

    static async getAllUserCourses(req, res){
        try {
            if(req.user.id){
                const data = await courseService.getUserCourses(req.query, req.user)
                return res.status(200).json(data)
            }
            return res.status(401).json({ error: 'Invalid user'})
        } catch (e) {
            res.status(400).json({ error: e.message})
        }
    }

    static async getCourseById(req, res){
        try {
            const course = await courseService.getCourseById(req.query)
            return res.status(200).json(course)
        } catch (e) {
            res.status(400).json({ error: e.message})
        }
    }
}