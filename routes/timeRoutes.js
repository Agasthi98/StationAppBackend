import express from 'express'
const  router = express.Router()
import { addTime } from '../controllers/timeController.js'

//diesel add route
router.post('/', addTime)


export default router 