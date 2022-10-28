import TimeModel from '../models/timeModel.js'


const addTime =  (req, res) => {
    var arrivalTime =req.body.arrivalTime;
    var endTime =req.body.endTime;
    var stationName =req.body.stationName;
    var stationNumber =req.body.stationNumber;
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

    const getShedOpenTimeDetails = (req, res)=>{
        var StationNumber =req.body.StationNumber;
        console.log(StationNumber)
        TimeModel.find({stationNumber: StationNumber})
        .then((data) => {
          console.log(data[0])
          // //console.log("PETROL DETAILS"+data[0].liters+data.arrivalTime[0]+data.endTime[0]+data.queueLength[0]+data.stationNumber[0]+data.stationName+data.stationLocation[0]);
          res.json({
            arrivalTime:data[0].arrivalTime,
            endTime:data[0].endTime,
            stationNumber:data[0].stationNumber,
            stationName:data[0].stationName,
            stationLocation:data[0].stationLocation
          })
        }).catch((err) => {
          console.log("GET SHED TIME FAILED"+err);
          res.json({
              code:400 ,
              body: "Fail" 
          })
        });
    }
    export{addTime,getShedOpenTimeDetails}