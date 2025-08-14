import { PrismaClient } from "../../generated/prisma/client.js"
import { buildCourseFilters, buildCourseSelect, formatCoursesResponse, buildCourseFiltersUser, buildCourseSelectUser, formatCoursesResponseUser } from "../utils/courseQuerysUtils.js"

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
        const whereClause = buildCourseFilters({ title, startDate, endDate })
        const selectClause = buildCourseSelect();

        //Data
        const courses = await prisma.course.findMany({
            where: whereClause,
            select: selectClause,
            skip,
            take: limit,
            orderBy: { postDate: 'desc' }
        })

        const total = await prisma.course.count({
            where: { deletedAt: null }
        })

        return formatCoursesResponse(courses, total, page, limit)
    }

    static async getUserCourses(queryParams, user){
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
        const whereClause = buildCourseFiltersUser({ title, startDate, endDate, progress }, user)
        const selectClause = buildCourseSelectUser(user);

        //Data
        const courses = await prisma.course.findMany({
            where: whereClause,
            select: selectClause,
            skip,
            take: limit,
            orderBy: { postDate: 'desc' }
        })

        const total = await prisma.course.count({
            where: { deletedAt: null }
        })

        return formatCoursesResponseUser(courses, total, page, limit)
    }

    static async getCourseById(id){
        const course = await prisma.course.findFirst({
            where: { 
                id: parseInt(id, 10),
                deletedAt: null,
                lessons: {
                    where: { deletedAt: null }
                }
            },
        })

        return course
    }

    static async createCourse(data){
        const newCourse = await prisma.course.create({ data })

        return newCourse
    }

    static async updateCourse(id, data){
        const updatedCourse = await prisma.course.update({
            where: { id: parseInt(id, 10) },
            data
        })

        if(!updatedCourse){
            throw new Error('Course not found')
        }

        return updatedCourse
    }
}