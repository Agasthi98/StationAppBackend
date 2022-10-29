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
          code:200 ,
          body: "Unavailable",
          message: 'Unavailable'
      })
    });
}

const removeDiesel = (req,res)=> {
  console.log("LOG::DIESEL:: REMOVE START TO WORK");

  //Get data from the frontend
  var StationNumber =req.body.StationNumber;

 //Find the Station key
  Diesel.find({stationNumber: StationNumber})
    .then((data) => {
      console.log("LOG::DIESEL:: FIND KEY SUCCESS");
      const _id = data[0]._id;


//find and delete the database record
Diesel
  .findByIdAndDelete(_id)
  .then(() => {
    console.log("LOG::DIESEL:: FIND AND DELETE SUCCESS");
    res.json({
      code:200 ,
      body: "Success" 
  })

  }).catch((err) => {
    console.log("LOG::PETROL:: FAIL"+err);
    res.json({
      code:400 ,
      body: "Fail" 

      })
    })
 })
}

  export{addDiesel,getDieselDetails,removeDiesel}