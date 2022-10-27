import mongoose from 'mongoose'


//Add Diesel schema
const dieselSchema = new mongoose.Schema({
    stationName:{
        type:String,
        required:true
    },
    stationNumber:{
        type:String,
        required:true
    },
    liters:{
        type:String,
        required:true
    },
    arrivalTime:{
        type:String,
        required:true
    },
    endTime:{
        type:String,
        required:true
    },
    queueLength:{
        type:String,
        required:true
    },
    stationLocation:{
        type:String,
        required:true
    },
});
const Diesel = mongoose.model("diesel",dieselSchema);
 
export default Diesel