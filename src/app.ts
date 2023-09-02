import cors = require('cors')
import express from 'express'
import { router } from './routes'
import { errorMiddleware } from './middlewares/error'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ type: 'application/vnd.api+json' }))

app.use(router)

app.use(errorMiddleware)

export { app }
