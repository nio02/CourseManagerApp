import { loginUser, registerUser } from "../services/authService.js"

export const register = async (req, res) => {
    try {
        const { name, birthdate, email, password } = req.body

        await registerUser(name, birthdate, email, password)
        return res.status(200).json({ message: 'User registered succesfully'})
    } catch (e) {
        res.status(400).json({ error: e.message})
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        
        const token = await loginUser(email, password)
        return res.status(200).json({ token })
    } catch (e) {
        res.status(400).json({ error: e.message})
    }
}