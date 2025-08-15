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

    static async createLesson(idCourse, data){
        if (!idCourse){
            throw new Error('Course not found')
        }

        const validCourse = await prisma.course.findFirst({
            where: { id: parseInt(idCourse, 10) }
        })

        if(!validCourse){
            throw new Error('Course not found')
        }

        const newLesson = await prisma.lesson.create({ 
            data: {
                title: data.title,
                description: data.description,
                video: data.video,
                course: {
                    connect: { id: parseInt(idCourse, 10) }
                }
            }
        })

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
        const lessonExist = await prisma.lesson.findFirst({
            where: {
                id: parseInt(id, 10),
                deletedAt: null
            }
        })

        if(!lessonExist){
            throw new Error('Lesson not found')
        }

        const lessonDelete = await prisma.lesson.update({ 
            where: { 
                id: parseInt(id, 10),
                lessonsProgress: {
                    none: {}
                }
            },
            data: {
                deletedAt: new Date()
            }
        })

        if(!lessonDelete){
            throw new Error('Lesson has progress related')
        }

        return "Lesson deleted succesfully"
    }
}