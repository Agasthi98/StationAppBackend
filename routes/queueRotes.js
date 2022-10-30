import express from 'express'
const  router = express.Router()
import { addQueue, displayQueueDetails } from '../controllers/queueController.js'


router.post('/', addQueue)
router.post('/display', displayQueueDetails)




export default router 