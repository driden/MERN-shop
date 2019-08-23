import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import { mongoURI } from './config/mongo-connection'

const app = express()

app.use(bodyParser.json())

mongoose
    .connect(mongoURI)
    .then(() => console.log('MongoDB connected.'))
    .catch(err => console.log(err))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))