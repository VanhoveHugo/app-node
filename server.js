/* |-| |_| (_, () . \/ /\ |\| |-| () \/ [-  */
'use strict'
require('dotenv').config()
const express           = require('express')
const mongoose          = require('mongoose')
const app               = express()
const path              = require('path')
const publicRoutes      = require('./controllers/routes')

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')
app.use(express.static('./public'))

app.use(express.urlencoded())
app.use(express.json())

app.use('/', publicRoutes);

app.listen(process.env.PORT)
