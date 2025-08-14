import { PrismaClient } from "../../generated/prisma/client.js"

const prisma = new PrismaClient()

export class lessonProgressService {
    static async getLessonProgress(idLesson){
        const lessonsProgress = await prisma.lessonProgress.findMany({
            where: { idLesson }
        })

        return lessonsProgress
    }

    static async getLessonProgressById(id){
        const lessonProgress = await prisma.lessonProgress.findFirst({
            where: { id: parseInt(id, 10) }
        })

        if(!lessonProgress){
            throw new Error('Lesson not found')
        }

        return lessonProgress
    }

    static async createLessonProgress(data){
        const newLessonProgress = await prisma.lessonProgress.create({ data })

        return newLessonProgress
    }

    static async updateLessonProgress(id, data){
        const updateLP = await prisma.lessonProgress.update({
            where: { id: parseInt(id, 10) },
            data
        })

        if(!updateLP){
            throw new Error('Lesson not found')
        }

        return updateLP
    }

    static async deleteLessonProgress(id){
        const deleteLP = await prisma.lessonProgress.delete({
            where: { id: parseInt(id, 10) }
        })

        if(!deleteLP){
            throw new Error('Lesson not found')
        }

        return "Lesson progress deleted succesfully"
    }
}