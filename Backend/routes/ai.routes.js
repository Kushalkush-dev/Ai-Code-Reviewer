const express = require('express');
const airouter=express.Router();
const promptResponse =require("../controllers/ai.controllers")

airouter.post('/getai',promptResponse )




module.exports=airouter