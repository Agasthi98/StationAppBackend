import express from 'express'
const  router = express.Router()
import { addDiesel, getDieselDetails } from '../controllers/dieselController.js'

//diesel add route
router.post('/', addDiesel)
router.post('/display', getDieselDetails)



export default router 