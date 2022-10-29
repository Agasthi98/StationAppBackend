import express from 'express'
const  router = express.Router()
import { addDiesel, getDieselDetails,removeDiesel } from '../controllers/dieselController.js'

//diesel add route
router.post('/', addDiesel)
router.post('/display', getDieselDetails)
router.post('/remove', removeDiesel)



export default router 