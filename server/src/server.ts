import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { routes } from './routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.HTTP_PORT, () => {
  console.log(`HTTP server running @localhost:${process.env.HTTP_PORT}`)
})
