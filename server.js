const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const mongoURI = require('./config/mongo-connection')

const app = express()

const items = require('./routes/api/items')

app.use(bodyParser.json())

mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected.'))
    .catch(err => console.log(err))

app.use('/api/items', items)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))