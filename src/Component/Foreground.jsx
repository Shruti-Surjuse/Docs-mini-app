import React,{useRef} from 'react'
import Cards from './Cards'
import { motion } from "framer-motion"


function Foreground() {

  const ref=useRef(null)
  

  const data=[
    {
    desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, qui.",
    fileSize:".9mb",
    close:true,
    tag:{isOpen:false,tagList:"Download Now",tagColor:"green"}
    },
    {
      desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, qui.",
      fileSize:".9mb",
      close:true,
      tag:{isOpen:true,tagList:"Download Now",tagColor:"green"}
      },
      {
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, qui.",
        fileSize:".9mb",
        close:true,
        tag:{isOpen:true,tagList:"Update",tagColor:"blue"}
        }
  ];
  return (
    <div ref={ref} className=' fixed flex gap-5 flex-wrap top-0 left-0 z-[3] w-full h-full p-5'>
        {data.map((item,index)=>(
          <Cards data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground