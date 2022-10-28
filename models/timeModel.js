import mongoose from "mongoose";


const TSchema = new mongoose.Schema({
    arrivalTime:{
        type:String,
        required:false
    },
    endTime:{
        type:String,
        required:false
    },
    stationNumber:{
        type:String,
        required:true
    },
    stationName:{
        type:String,
        required:true
    },
    stationLocation:{
        type:String,
        required:true
    }
});
const Time = mongoose.model("OpenTime",TSchema);

export default Time