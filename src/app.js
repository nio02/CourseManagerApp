import express from 'express'
import { router } from './routes/index.js'
import { corsMiddleware } from './middlewares/cors.js'

export const app = express()

app.disable('x-powered-by')
app.use(express.json())
app.use(corsMiddleware())

app.use('/api', router)

app.get('/', (req, res) => {
    res.send('Course App')
})