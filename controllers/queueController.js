import Queue from '../models/queueModel.js'

const addQueue = (req,res)=>{
    console.log("LOG:: QUEUE :: ADD START TO WORK");

    //Get data from the frontend
    var type =req.body.type;
    var queues =req.body.queue;
    var shed =req.body.shed;

    //Increase queue size by 1
    var queue = parseInt(queues) + 1;


    //Find shed key from the database
    Queue.find({shed: shed})
         .then((data) => {
            console.log("LOG:: QUEUE :: SUCCESS FIND SHED KEY"+data[0]._id);
            const _id = data[0]._id;

        //assign values for database
        const queueData = {
           type,
           queue,
           shed
         };
         const update = Queue
           .findByIdAndUpdate(_id, queueData)
           .then(() => {
            console.log("LOG:: QUEUE :: FIND AND UPDATE SUCCESS");
               res.json({
                   code:200 ,
                   body: "Success" 
               });
            })
            .catch((err) => {
                console.log("LOG:: QUEUE :: FAIL"+err);
                res.json({
                    code:400 ,
                    body: "Fail" 
                  });
            });
   }).catch(() =>{
    console.log("catch"+type,queue,
    shed)
        //Assign values for queue
        const QueueAdd= new Queue({ 
                type,
                queue,
                shed
        });
        //Save new queue data to the database
        QueueAdd.save().then(()=>{
            console.log("LOG:: QUEUE :: SAVE QUEUE DATA SUCCESS");
            res.json({
                    code:200 ,
                    body: "Success" 
         })

        }).catch((err) =>{
            console.log("LOG:: QUEUE :: FAIL"+err);
              res.json({
                code:400 ,
                body: "Fail" 
              });
        })
    });
}

const displayQueueDetails = (req,res) => {
    console.log("LOG:: QUEUE :: DISPLAY START TO WORK"+req.body.shed);

    //Get data from the frontend
    var shed =req.body.shed;

    //Find shed key from the database
    Queue.find({shed: shed})
      .then((data) => {
        console.log("LOG:: QUEUE :: FIND STATION KEY SUCCESS"+data[0].queue);
        if(data){
            res.json({
                type:data[0].type,
                queue:data[0].queue,
                shed:data[0].shed
            })
        }else{
            console.log("LOG:: QUEUE :: FIND STATION KEY FAIL");
            res.json({
                code:400 ,
                body: "Success" 
            })
        }
  
      })
      .catch((err) => {
        console.log("LOG:: QUEUE :: FAIL"+err);
        res.json({
            code:400 ,
            body: "Fail" 
        })
      });
  }

export {addQueue,displayQueueDetails}