const aiResponse=require("../services/ai.services")


const promptResponse=async (req,res)=>{

  const prompt=req.body.prompt
  if(!prompt){
    return res.status(400).send('Prompt is required')
  }
const response=await aiResponse(prompt)

res.send(response)
}


module.exports=promptResponse