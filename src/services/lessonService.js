import { PrismaClient } from "../../generated/prisma/client.js"

const prisma = new PrismaClient()

export class lessonService {
    static async getLessons(idCourse){
        const lessons = await prisma.lesson.findMany({
            where: {
                idCourse: parseInt(idCourse, 10)
            }
        })

        return lessons
    }

    static async getLessonById(id){
        const lesson = await prisma.lesson.findFirst({
            where: { id: parseInt(id, 10) }
        })

        if(!lesson){
            throw new Error("Lesson not found")
        }

        return lesson
    }

    static async createLesson(data){
        const newLesson = await prisma.lesson.create({ data })
        return newLesson
    }

    static async updateLesson(idLesson, data){
        const lessonExist = await prisma.lesson.findFirst({
            where: {
                id: parseInt(idLesson, 10)
            },
            data
        })

        if(!lessonExist){
            throw new Error('Lesson not found')
        }

        return lessonExist
    }

    static async deleteLesson(id){
        const lessonDelete = await prisma.lesson.findFirst({ 
            where: { id: parseInt(id, 10) }
        })

        if(!lessonDelete){
            throw new Error('Lesson not found')
        }

        return "Lesson deleted succesfully"
    }
}