import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { routes } from './routes'

const app = express()
app.use(cors())
app.use(express.json({ limit: '1mb' }))
app.use(routes)

const PORT = process.env.PORT || 3333
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
