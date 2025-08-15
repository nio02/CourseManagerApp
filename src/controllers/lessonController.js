import { lessonService } from "../services/lessonService.js"

export class lessonController {
    static async createLesson(req, res){
        try {
            const idCourse = req.params.id

            if(!idCourse){
                return res.status(400).json({ error: 'Course not found' })
            }

            const newLesson = await lessonService.createLesson(idCourse, req.body)
            return res.status(200).json(newLesson)
        } catch (e) {
            res.status(400).json({ error: e.message})
        }
    }

    static async deleteLesson(req, res){
        try {
            const idLesson = req.params.id

            if(!idLesson){
                return res.status(400).json({ error: 'Lesson not found' })
            }
            
            const deletedLesson = await lessonService.deleteLesson(req.params.id)
            
            return res.status(200).json(deletedLesson)
        } catch (e) {
            res.status(400).json({ error: e.message})
        }
    }
}