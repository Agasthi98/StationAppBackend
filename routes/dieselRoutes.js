import express from 'express'
const  router = express.Router()
import { addDiesel } from '../controllers/dieselController.js'

//diesel add route
router.post('/', addDiesel)
// router.put('/update', updateDiesel)



export default router 