const express = require('express')
    compression = require('compression')
    path = require('path')
    morgan = require('morgan')
    helmet = require('helmet')
    cors = require('cors')
    bodyParser = require('body-parser')

const customerRouter = require('./routers/customer.router')

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];
const basePath = config.basePath;

const app = express()

app.use(cors())
app.use(compression())
app.use(helmet())
app.use(morgan('combined'))
app.use(express.json({limit: '100mb'}))

app.use(basePath+'/customer', customerRouter)

app.listen(3003)
module.exports = app
