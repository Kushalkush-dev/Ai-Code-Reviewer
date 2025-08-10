const aiResponse=require("../services/ai.services")


const promptResponse=async (req,res)=>{

  const code=req.body.code
  if(!code){
    return res.status(400).send('Prompt is required')
  }
const response=await aiResponse(code)

res.send(response)
}


module.exports=promptResponse