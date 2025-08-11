import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import prismjs from 'prismjs'
import 'prismjs/themes/prism.css'
import { useEffect } from 'react'
import Editor from 'react-simple-code-editor';
import 'prismjs/themes/prism-tomorrow.css'
import axios from 'axios'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'









function App() {

  const [code, setcode] = useState('')
  const [reviewedcode, setreviewedcode] = useState('')



  useEffect(()=>{
    prismjs.highlightAll()
  }) 

async function getCode() {

  const response=await axios.post("http://localhost:5000/ai/getai",{code})
  setreviewedcode(response.data)
  console.log(response.data);
  
  
}

  return (
    <>
      <main className='flex p-5 bg-gray-900 min-h-screen gap-2 '>
        <div id="left" className='h-[95vh] w-[50%]  bg-black rounded-2xl relative'>
          
            <Editor
              value={code}
              onValueChange={newCode=>setcode(newCode)}
              highlight={code => prismjs.highlight(code, prismjs.languages.javascript, 'js')}
              padding={10}
              className="bg-gray-800 text-white rounded-lg h-full w-full border-2 border-gray-400 focus:border-blue-500"
              style={{ fontFamily: '"Fira code", "Fira Mono", monospace', fontSize: 15}}
            />
          

          <button onClick={()=>{
            getCode()

          }} className='absolute active:scale-90 bg-green-500 right-2 top-3 px-4 py-1.5 rounded-2xl text-white font-medium'>Review</button>
        </div>
      
        <div
          id="right"
          className="h-[95vh] w-[50%] bg-[#1e1e1e] rounded-2xl text-white text-md overflow-auto p-8 font-light "
        >
          <Markdown rehypePlugins={[rehypeHighlight]}>
            {reviewedcode}
          </Markdown>
        </div>






      </main>
    </>
  )
}

export default App
