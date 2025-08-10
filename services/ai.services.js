require('dotenv').config();
const {GoogleGenAI} = require("@google/genai")

const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text
}


const generateResponse=async (prompt)=>{
  const result=await main(prompt)

  return result
}




module.exports=generateResponse