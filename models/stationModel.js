import mongoose from 'mongoose'

const stationSchema = mongoose.Schema({

   
    stationName:{
        type: String,
        required: true
    },
    stationPhoneNo:{
        type: String,
        required: true
    },
    fuelStatus:{
        type: String,
        required: true,
        default: 0
    },
    fuelType:{
        type: String,
        required: true,
    },
    stationLocation:{
        type: String,
    },
   
}, {
    timestamps: true
})

const Station = mongoose.model('station', stationSchema)
 
export default Station