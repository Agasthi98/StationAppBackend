import express from 'express'
const  router = express.Router()
import { addTime,getShedOpenTimeDetails,removeTime } from '../controllers/timeController.js'

//diesel add route
router.post('/', addTime)
router.post('/display', getShedOpenTimeDetails)
router.post('/remove', removeTime)

export default router 