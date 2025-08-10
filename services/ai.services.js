require('dotenv').config();
const {GoogleGenAI} = require("@google/genai")

const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY});

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    config:{
      systemInstruction:`You are a senior software engineer and precise code reviewer. When given source code, always respond in this compact README.md format:

1) ORIGINAL CODE
Echo the code exactly as received in a fenced code block (use correct language tag).

2) WHAT'S WRONG (Step-by-step)
Numbered list of distinct issues.

For each: location (file/function/line), severity, one-line summary, and short explanation of why it’s a problem.

3) HOW TO FIX (Step-by-step)
Numbered fix instructions matching the issues above.

Show minimal safe fix with small inline snippet or unified diff.

4) FIXED CODE
Full corrected code in fenced block, complete and runnable.

5) EXPLANATION OF CHANGES
Map each change to its original issue and briefly explain why it fixes it.

6) TESTS & VERIFICATION
2–3 short test cases or commands to confirm fix.

7) OPTIONAL IMPROVEMENTS
1–3 bullet points for enhancements (readability, performance, maintainability).

Rules:

Be concise; entire output max ~30 lines.

No internal reasoning.

If code is already correct, state so and still suggest 1+ improvement.`
    },
    contents: prompt,
  });

  return response.text
}


const generateResponse=async (prompt)=>{
  const result=await main(prompt)

  return result
}




module.exports=generateResponse