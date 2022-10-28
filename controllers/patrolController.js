import Petrol from '../models/patrolModel.js'


//Add station
const addPetrol =  (req, res) => {

  var liters =req.body.liters;
  var arrivalTime =req.body.arrivalTime;
  var endTime =req.body.endTime;
  var queueLength =req.body.queueLength;
  var stationName =req.body.stationName;
  var stationNumber =req.body.stationNumber;
  var stationLocation =req.body.stationLocation;
    
  console.log("Agasthi:"+liters,arrivalTime,endTime,queueLength,stationName,stationNumber,stationLocation)
    const newPatrol = new Petrol({
      liters,
      arrivalTime,
      endTime,
      queueLength, 
      stationName,
      stationNumber,
      stationLocation
  
    })
    try {
      console.log(newPatrol)
      newPatrol.save()
      res.json(' Successfully')
    } catch (error) {
      return res.status(400).json({ error });
    }
  }


   //Get data from the frontend

   const getPetrolDetails = (req, res)=>{
    var StationNumber =req.body.StationNumber;
    console.log(StationNumber)
    Petrol.find({stationNumber: StationNumber})
    .then((data) => {
      //console.log(data[0])
      // //console.log("PETROL DETAILS"+data[0].liters+data.arrivalTime[0]+data.endTime[0]+data.queueLength[0]+data.stationNumber[0]+data.stationName+data.stationLocation[0]);
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
      console.log("GET PETROL FAILED"+err);
      res.json({
          code:400 ,
          body: "Fail" 
      })
    });
}
  

  export{addPetrol,getPetrolDetails} 