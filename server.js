import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import bodyParser from 'body-parser'
import cors from 'cors'

//configure dotenv file
dotenv.config()

//Database called
connectDB()

//Called express
const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({
  extended:true
}))

//backend route config
app.get('/', (req, res) => {
    res.send('Api is running....')
})

//use imported routes
import PatrolRoutes from './routes/patrolRoutes.js'
import DieselRoutes from './routes/dieselRoutes.js'
import TimeRoutes from './routes/timeRoutes.js'

app.use('/api/petrol', PatrolRoutes);
app.use('/api/diesel', DieselRoutes);
app.use('/api/time', TimeRoutes)


//PORT configure backend
const PORT = process.env.PORT || 8000

app.listen(
    PORT,
    console.log(
      `server running in port ${PORT}`.yellow.bold
    )
  )