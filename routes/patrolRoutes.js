import express from 'express'
const  router = express.Router()
import { addPetrol,getPetrolDetails } from '../controllers/patrolController.js'

//petrol add route
router.post('/', addPetrol)
router.post('/display', getPetrolDetails)
// router.put('/update', updatePetrol)



export default router 