const express= require('express')
const routes = express.Router()
const {controllerF}=require('../controllers/controllerito')

routes.post('/', controllerF) 
module.exports=routes