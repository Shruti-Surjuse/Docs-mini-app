import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Cards({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.2}  dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className='flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[50px] px-4 py-7 text-white relative overflow-hidden '>
        <FaRegFileAlt/>
        <p className='text-semibold mt-3 leading-tight text-sm'>{data.desc}</p>
        <div className='footer  absolute w-full bottom-0 right-0 '>
            <div className='flex items-center justify-between text-white px-8 py-3'>
                <h1>{data.fileSize}</h1>
               <span className='w-7 h-7 bg-zinc-600  rounded-full flex items-center justify-center'>
                {data.close ? <IoMdClose  color="#fff" /> : <FaDownload size=".7em" color="#fff" />}
               </span>

            </div>
            
            {data.tag.isOpen && ( 
            <div className={`tag h-11 w-full ${data.tag.tagColor ==="blue" ? "bg-blue-500":"bg-green-600"} flex items-center justify-center `}>
              <h3 className='text-sm'>{data.tag.tagList} </h3>
            </div>)}
           
        </div>

        {/* <div className='tag absolute w-full bottom-0 right-0 px-8'></div> */}

    </motion.div>
  )
}

export default Cards