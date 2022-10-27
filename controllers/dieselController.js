import Diesel from '../models/dieselModel.js'


//Add station
const addDiesel =  (req, res) => {

  var liters =req.body.liters;
  var arrivalTime =req.body.arrivalTime;
  var endTime =req.body.endTime;
  var queueLength =req.body.queueLength;
  var stationNumber =req.body.StationNumber;
  var stationName =req.body.StationName;
  var stationLocation =req.body.stationLocation;
    
    const newDiesel = new Diesel({
      liters,
      arrivalTime,
      endTime,
      queueLength, 
      stationNumber,
      stationName,
      stationLocation
    })
    try {
      console.log(newDiesel)
      newDiesel.save()
      res.json('Diesel added Successfully')
    } catch (error) {
      return res.status(400).json({ error });
    }
  }


  //  //Update petrol
  //  const updateDiesel =  (req, res) => {

  //   const {
  //     liters,
  //     arrival,
  //     departure,
  //     queue,
  //     StationNumber,
  //     StationName,
  //     StationLocation
  //   } = req.body
  
  //   const diesel =  Diesel.findById(req.params.id)
  
  //   if (diesel) {
  //     diesel.liters = liters,
  //     diesel.arrival = arrival,
  //     diesel.departure = departure,
  //     diesel.queue = queue,
  //     diesel.StationName = StationName,
  //     diesel.StationLocation = StationLocation,
  //     diesel.StationNumber = StationNumber
  
  //     const updateDiesel =  diesel.save()
  //     res.json(updateDiesel)
  
  //   } else {
  //     res.status(404)
  //     throw new Error("Diesel Not Found")
  //   }
  
  // }

  export{addDiesel}