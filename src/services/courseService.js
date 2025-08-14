import { PrismaClient } from "../../generated/prisma/client.js"

const prisma = new PrismaClient()

export class courseService {
    static async getCourses(queryParams){

        let {
            title = null,
            startDate = null,
            endDate = null,
            page = 1,
            limit = 3
        } = queryParams

        page = parseInt(page)
        limit = parseInt(limit)

        const skip = (page - 1) * limit

        //Dynamic filter build

        const where = {
            deletedAt: null
        }

        if (title){
            where.title = {
                contains: title.toLowerCase()
            }
        }

        if (startDate && endDate){
            where.postDate = {
                gte: new Date(startDate),
                lte: new Date(endDate)
            }
        }

        //Data

        const [courses, total] = await Promise.all([
            prisma.course.findMany({
                where,
                select:{
                    logo: true,
                    title: true,
                    postDate: true,
                    introVideo: true,
                    _count: {
                        select: {lessons: true}
                    }
                },
                skip,
                take: limit,
                orderBy: {
                    postDate: 'desc'
                }
            }),
            
            prisma.course.count({
                where: { deletedAt: null }
            })
        ])

        const formattedCourses = courses.map(course => ({
            id: course.id,
            logo: course.logo,
            title: course.title,
            postDate: course.postDate,
            introVideo: course.introVideo,
            totalLessons: course._count.lessons
        }));

        return {
            data: formattedCourses,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total/limit)
            }
        }
    }

    static async getUserCourses(queryParams, idUser){

        let {
            title = null,
            startDate = null,
            endDate = null,
            progress = null,
            page = 1,
            limit = 3
        } = queryParams

        page = parseInt(page)
        limit = parseInt(limit)

        const skip = (page - 1) * limit

        //Dynamic filter build

        const where = {
            deletedAt: null
        }

        if (title){
            where.title = {
                contains: title.toLowerCase()
            }
        }

        if (startDate && endDate){
            where.postDate = {
                gte: new Date(startDate),
                lte: new Date(endDate)
            }
        }

        if (progress){
            where.coursesProgress = {
                some: {
                    idUser,
                    state: progress,
                    deletedAt: null
                }
            }
        }

        //Data

        const [courses, total, lessonsCompleted] = await Promise.all([
            prisma.course.findMany({
                where,
                select:{
                    logo: true,
                    title: true,
                    postDate: true,
                    introVideo: true,
                    coursesProgress: {
                        where: { deletedAt: null, idUser },
                        take: 1,
                        select: { state: true }
                    },
                    _count: {
                        select: {lessons: true}
                    }
                },
                skip,
                take: limit,
                orderBy: {
                    postDate: 'desc'
                }
            }),
            
            prisma.course.count({
                where: { deletedAt: null }
            }),

            prisma.course.count({
                where: { 
                    deletedAt: null,
                    lessons: {
                        some: {
                            lessonsProgress: {
                                some: {
                                    idUser,
                                    state: 'COMPLETED',
                                    deletedAt: null
                                }
                            }
                        }
                    }
                }
            })
        ])

        const formattedCourses = courses.map(course => ({
            id: course.id,
            logo: course.logo,
            title: course.title,
            postDate: course.postDate,
            introVideo: course.introVideo,
            totalLessons: course._count.lessons,
            courseProgress: course.coursesProgress[0],
            completedLessons: lessonsCompleted
        }));

        return {
            data: formattedCourses,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total/limit)
            }
        }
    }

    static async createCourse(data){
       
    }
}