import { PrismaClient } from "../../generated/prisma/client.js"

const prisma = new PrismaClient()

export class courseProgressService {
    static async getCourseProgresses(){
        const coursesProgresses = await prisma.courseProgress.findMany()

        return coursesProgresses
    }

    static async getCourseProgressByCourseId(idCourse){
        const courseProgresses = await prisma.courseProgress.findMany({
            where: { idCourse: parseInt(idCourse, 10) }
        })

        return courseProgresses
    }

    static async getCourseProgressById(id){
        const courseProgress = await prisma.courseProgress.findFirst({
            where: { id: parseInt(id, 10) }
        })

        if(!courseProgress){
            throw new Error("Course progress not found")
        }

        return courseProgress
    }

    static async updateCourseProgress(id, data){
        const courseProgress = await prisma.courseProgress.update({
            where: { 
                id: parseInt(id, 10) 
            },
            data
        })

        if(!courseProgress){
            throw new Error("Course progress not found")
        }

        return courseProgress
    }

    static async deleteCourseProgress(id){
        const deletedCourseProgress = await prisma.courseProgress.delete({
            where: { id: parseInt(id,10) }
        })

        if(!deletedCourseProgress){
            throw new Error("Course progress not found")
        }

        return "Course Progress deleted succesfully"
    }
}