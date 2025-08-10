import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
 
  return (
    <>
      <main className='flex p-5 bg-gray-900 min-h-screen gap-2 '>
        <div id="left" className='h-[95vh] w-[50%]  bg-black rounded-2xl relative'>
          <button className='absolute bg-green-500 right-2 top-3 px-4 py-1.5 rounded-2xl text-white font-medium'>Review</button>
        </div>
        <div id="right" className='h-[95vh] w-[50%] bg-gray-500 rounded-2xl'></div>
      </main>
    </>
  )
}

export default App
