const express = require('express');
const router=express.Router();
const promptResponse =require("../controllers/ai.controllers")

router.post('/getai',promptResponse )




module.exports=router