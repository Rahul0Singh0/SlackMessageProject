import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { port } from './config/serverConfig.js'

const app = express()

app.get('/ping', (req, res) => {
  return res.status(StatusCodes.OK).json({ message: 'pong' })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
