import express from 'express'
const  router = express.Router()
import { addPetrol,getPetrolDetails,removePetrol,searchStation } from '../controllers/patrolController.js'

//petrol add route
router.post('/', addPetrol)
router.post('/display', getPetrolDetails)
router.post('/remove', removePetrol)
router.get('/search/:location', searchStation)



export default router 