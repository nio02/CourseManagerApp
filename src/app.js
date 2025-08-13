import express from 'express'
import { router } from './routes/index.js'

export const app = express()

app.disable('x-powered-by')
app.use(express.json())

app.use('/api', router)

app.get('/', (req, res) => {
    res.send('Hello World')
})