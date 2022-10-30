import mongoose from 'mongoose'


const queueSchema = new mongoose.Schema({

    type:{
        type:String,
        required:true
    },
    queue:{
        type:Number,
        required:true
    },
    shed:{
        type:String,
        required:true
    }

})



const Queue = mongoose.model("Queue",queueSchema);
export default Queue