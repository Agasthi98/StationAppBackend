import Diesel from '../models/dieselModel.js'


//Add station
const addDiesel =  (req, res) => {

  var liters =req.body.liters;
  var arrivalTime =req.body.arrivalTime;
  var endTime =req.body.endTime;
  var queueLength =req.body.queueLength;
  var stationName =req.body.stationName;
  var stationNumber =req.body.stationNumber;
  var stationLocation =req.body.stationLocation;
    
    const newDiesel = new Diesel({
      liters,
      arrivalTime,
      endTime,
      queueLength, 
      stationName,
      stationNumber,
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

  
  const getDieselDetails = (req, res)=>{
    var StationNumber =req.body.StationNumber;
    console.log(StationNumber)
    Diesel.find({stationNumber: StationNumber})
    .then((data) => {
      console.log(data[0])
      //console.log("PETROL DETAILS"+data[0].liters+data.arrivalTime[0]+data.endTime[0]+data.queueLength[0]+data.stationNumber[0]+data.stationName+data.stationLocation[0]);
      res.json({
        liters:data[0].liters,
        arrivalTime:data[0].arrivalTime,
        endTime:data[0].endTime,
        queueLength:data[0].queueLength,
        stationNumber:data[0].stationNumber,
        stationName:data[0].stationName,
        stationLocation:data[0].stationLocation
      })
    }).catch((err) => {
      console.log("GET DIESEL FAILED"+err);
      res.json({
          code:400 ,
          body: "Fail" 
      })
    });
}

  export{addDiesel,getDieselDetails}