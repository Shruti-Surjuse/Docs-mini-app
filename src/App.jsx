import React from 'react'
import Background from './Component/Background'
import Foreground from './Component/Foreground'

function App() {
  return (
    <div className='w-full h-screen bg-zinc-800 relative '>
     <Background/>
     <div className='w-full h-screen absolute top-0 left-0 z-[3]'></div>
     <Foreground/>
    </div>
  )
}

export default App