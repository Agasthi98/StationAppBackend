import asyncHandler from 'express-async-handler'
import Station from '../models/stationModel.js'


//Add station
const addStation = asyncHandler(async (req, res) => {
    const {
        stationName,
        stationPhoneNo,
        fuelStatus,
        fuelType,
        stationLocation,
    } = req.body
  
    const newStation = new Station({
        stationName,
        stationPhoneNo,
        fuelStatus,
        fuelType,
        stationLocation,
  
    })
    try {
      console.log("run")
      await newStation.save()
      res.send('New Station Added Successfully')
    } catch (error) {
      return res.status(400).json({ error });
    }
  })

  export{addStation}