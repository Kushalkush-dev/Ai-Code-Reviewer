const express=require('express');
const app=express();
const airouter=require("../routes/ai.routes")

const cors=require("cors")

app.use(cors())

app.use(express.json());


app.use(express.urlencoded({ extended: true }));


app.use(express.json());
app.use('/ai',airouter)

app.get('/',(req,res)=>{
res.send("HomePage");
  
})



module.exports=app