export function buildCourseFilters({ title, startDate, endDate }){
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

    return where
}

export function buildCourseFiltersUser({ title, startDate, endDate, progress }, user){
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

    if(user.role === 'STUDENT' && progress){
        where.coursesProgress = {
            some: {
                deletedAt: null,
                idUser: user.id,
                state: progress.toUpperCase()
            }
        }
    }

    return where
}

export function buildCourseSelect(){
    const baseSelect = {
        logo: true,
        title: true,
        postDate: true,
        introVideo: true,
        _count: { select: { lessons: true } }
    };

    return baseSelect
}

export function buildCourseSelectUser(user){
    const baseSelect = {
        logo: true,
        title: true,
        postDate: true,
        introVideo: true,
        _count: { select: { lessons: true } },
        coursesProgress: {
            where: {
                deletedAt: null,
                idUser: user.id
            },
            select: {
                state: true
            }
        },
        lessons: {
            where: {
                deletedAt: null,
                lessonsProgress: {
                    some: {
                        idUser: user.id,
                        state: 'COMPLETED',
                        deletedAt: null
                    }
                }
            },
            select: { id: true }
        }
    };

    return baseSelect
}

export function formatCoursesResponse(courses, total, page, limit){
    const fomatedCourses = courses.map(course => ({
        logo: course.logo,
        title: course.title,
        postDate: course.postDate,
        introVideo: course.introVideo,
        totalLessons: course._count.lessons
    }))

    return {
        data: fomatedCourses,
        pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total/limit)
        }
    }
}

export function formatCoursesResponseUser(courses, total, page, limit){
    const formatedCourses = courses.map(course => ({
        logo: course.logo,
        title: course.title,
        postDate: course.postDate,
        introVideo: course.introVideo,
        totalLessons: course._count.lessons,
        completedLessons: course.lessons.length,
        courseProgress: course.coursesProgress[0]
    }))

    return {
        data: formatedCourses,
        pagination: {
            total,
            page,
            limit,
            totalPages: Math.ceil(total/limit)
        }
    }
}