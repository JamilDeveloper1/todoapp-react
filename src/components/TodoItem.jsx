import React, { useState } from 'react'

import {BsFillTrashFill} from 'react-icons/bs'
import {AiOutlineCheck} from 'react-icons/ai'

const TodoItem = (props) => {

    const [line,setLine] = useState(false);

    function customLine(){
        setLine(prevValue =>{
            return !prevValue
        })
    }

    return (

    <div  className='w-full flex items-center justify-between border border-slate-500 p-3 cursor-pointer hover:bg-slate-200'>
    
      <li style={{textDecoration:line ? "line-through" : "none"}}>{props.text}</li>
    <div className='flex justify-center items-center gap-2'>
    <AiOutlineCheck onClick={customLine} className='text-green-500'/>
      <BsFillTrashFill className='text-red-500 cursor-pointer' onClick={()=>{
    props.onChecked(props.id)
    }}  />
    </div>
    </div>
  )
}

export default TodoItem
