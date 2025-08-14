import { authService } from "../services/authService.js"

export class authController {
    static async register(req, res){
        try {
            const { name, birthdate, email, password } = req.body

            await authService.registerUser(name, birthdate, email, password)
            return res.status(200).json({ message: 'User registered succesfully'})
        } catch (e) {
            res.status(400).json({ error: e.message})
        }
    }

    static async login(req, res){
        try {
            const { email, password } = req.body

            const token = await authService.loginUser(email, password)
            return res.status(200).json({ token })
        } catch (e) {
            res.status(400).json({ error: e.message})
        }
    }
}