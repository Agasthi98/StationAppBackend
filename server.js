import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

dotenv.config()
connectDB()


const app = express()

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Api is running....')
})
import StationRoutes from './routes/stationRoutes.js'

app.use('/api/station', StationRoutes);

const PORT = process.env.PORT || 8000

app.listen(
    PORT,
    console.log(
      `server running in port ${PORT}`.yellow.bold
    )
  )