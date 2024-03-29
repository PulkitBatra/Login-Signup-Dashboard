import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import userRoutes from './routes/userRoutes.js'

import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is runnning...')
})

app.use('/api/users', userRoutes)
app.use(notFound) // If no such url request is found
app.use(errorHandler) // If request throws any kind of error

const PORT = process.env.PORT || 5000
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
