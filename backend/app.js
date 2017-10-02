import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/express_react', { useMongoClient: true })

require('./src/index')(app)

app.listen(9000, () => {
	console.log('Express server started...')
})