import express from 'express'
const  router = express.Router()
import { addTime,getShedOpenTimeDetails } from '../controllers/timeController.js'

//diesel add route
router.post('/', addTime)
router.post('/display', getShedOpenTimeDetails)


export default router 