import React from 'react'
import { useState } from 'react'
import TodoItem from './components/TodoItem';
const App = () => {

const [inputValue,setInputValue] = useState("");
const [todos,setTodos] = useState([]);

function handleClick(e){
  e.preventDefault();

if(inputValue.trim() !== ""){
  setTodos([...todos,inputValue])
  setInputValue("");
}
}


function deleteItem(id){

  setTodos(prevItems =>{

    return prevItems.filter((item,index) =>{

      return index !== id
    })

  })

}


  return (
    <div className=' w-full h-screen flex  items-center flex-col gap-5 '>
      <div className='w-11/12 md:w-2/5 h-1/5 flex justify-center items-center flex-col gap-5 border  border-slate-500 rounded-md'>
        <h1 className='text-3xl font-bold text-blue-800'>Todo List</h1>
      <form onClick={handleClick} className='border w-2/4  border-slate-500 flex items-center justify-center'>
        <input type="text" 
        placeholder='Add your tasks...'
        className=' outline-none pl-1 w-4/5'
        value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        <button className=' pl-2 text-3xl flex items-center justify-center'>+</button>
      </form>
      </div>
      <ul className='w-11/12 md:w-1/2 flex flex-col gap-5 max-h-screen'>
{todos.map((todo,index) => {
  return (<TodoItem 
  text={todo}
  id={index}
  key={index}
  onChecked={deleteItem}
  />)
})}
      </ul>
   
    </div>


)
}

export default App