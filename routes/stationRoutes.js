import express from 'express'
const  router = express.Router()
import { addStation } from '../controllers/stationController.js'


router.post('/', addStation)



export default router 