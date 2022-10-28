import TimeModel from '../models/timeModel.js'


const addTime =  (req, res) => {
    var arrivalTime =req.body.arrivalTime;
    var endTime =req.body.endTime;
    var stationNumber =req.body.stationName;
    var stationName =req.body.stationName;
    var stationLocation =req.body.stationLocation;
      
    console.log("Agasthi:"+arrivalTime,endTime,stationName,stationNumber,stationLocation)
      const newTime = new TimeModel({
        arrivalTime,
        endTime,
        stationName,
        stationNumber,
        stationLocation
    
      })
      try {
        console.log(newTime)
        newTime.save()
        res.json(' Successfully')
      } catch (error) {
        return res.status(400).json({ error });
      }
    }

    export{addTime}