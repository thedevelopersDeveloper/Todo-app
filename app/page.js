"use client"
import React,{ useState } from 'react'
const page = () => {
  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [mainTask,setmainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}])
    
    setTitle("")
    setDesc("")
  }
  let renderTask = <h2>No task available.</h2>;

  renderTask = mainTask.map((elem,index)=>{
    return(
      <li>
      <h5>{elem.title}</h5>
      <h6>{elem.desc}</h6>
      </li>
    )
  })
  return(
    <div className='w-full h-screen bg-zinc-900 '>
      <div className='w-full h-[15vh] bg-zinc-800 flex items-center justify-center'>
        <h1 className='text-white text-6xl font-bold'>Todo App</h1>
      </div>
      <div className='w-full h-[85vh]'>
        <div className='w-full h-[10vh] px-3 py-3'>
          <form onSubmit={submitHandler}>
            <input 
            className='mr-2 outline-none' 
            type="text" 
            value={title} 
            onChange={(e)=>{setTitle(e.target.value)}}
            placeholder='Enter the title.' 
            />
            <input 
            className='mr-2 outline-none' 
            type="text" 
            value={desc} 
            onChange={(e)=>{setDesc(e.target.value)}}
            placeholder="Enter the task."
            />
            <input 
            className='px-3 py-3 rounded-lg text-white bg-blue-600' 
            type="submit" 
            value="Add task" />
            </form>
        </div>
        <div className='w-full h-[75vh] '>
          <div className='w-full min-h-20 bg-red-900 px-2 py-2 mb-4'>
            <ul>
              {renderTask}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;