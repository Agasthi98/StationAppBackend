import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import bodyParser from 'body-parser'

//configure dotenv file
dotenv.config()

//Database called
connectDB()

//Called express
const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended:true
}))

//backend route config
app.get('/', (req, res) => {
    res.send('Api is running....')
})

//use imported routes
import StationRoutes from './routes/stationRoutes.js'
app.use('/api/station', StationRoutes);


//PORT configure backend
const PORT = process.env.PORT || 8000

app.listen(
    PORT,
    console.log(
      `server running in port ${PORT}`.yellow.bold
    )
  )