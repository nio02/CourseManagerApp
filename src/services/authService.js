import { PrismaClient } from "../../generated/prisma/client.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export class authService {
    static async registerUser(name, birthdate, email, password){
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await prisma.user.create({
            data: {
                name,
                birthdate: new Date(birthdate),
                email,
                password: hashedPassword,
                role: 'STUDENT'
            }
        })

        return newUser
    }

    static async loginUser(email, password){
        const user = await prisma.user.findFirst({
            where: {
                email: email,
                deletedAt: null
            }
        })

        if(!user){
            throw new Error('Inavalid email or password')
        }

        const validPassword = await bcrypt.compare(password, user.password)

        if(!validPassword){
            throw new Error('Invalid email or password')
        }

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '5h'})

        return token
    }
}