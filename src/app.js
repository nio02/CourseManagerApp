import express from 'express'
import swaggerUI from 'swagger-ui-express'
import { router } from './routes/index.js'
import { corsMiddleware } from './middlewares/cors.js'
import { swaggerDocument } from './swagger/swagger.js'

export const app = express()

app.disable('x-powered-by')
app.use(express.json())
app.use(corsMiddleware())

//Docs
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

//App
app.use('/api', router)

app.get('/', (req, res) => {
    res.send('Course App')
})