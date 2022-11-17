import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios"
import { useEffect } from "react";



function Crud() {

    const [input,setInput]=useState('')
  const [todos, setTodos] = useState([]);


  const fetchdata = async ()=>{
    const response = await axios.get('http://localhost:3000/todoList')
    setTodos(response.data)
  }

  // useEffect(()=> fetchdata(),[])


  const handlechange =(e)=>{
    setInput(e.target.value)
  }


  const handleadd = async()=>{
    await axios.post('http://localhost:3000/todoList',{"id":uuidv4(),"task":input})
    fetchdata();
  // setInput('')
  }

  const handledele = async(id)=>{
    // const filter = todos.filter(to=>to.id !==id)
    // setTodos(filter)
    await axios.delete(`http://localhost:3000/todoList/${id}`)
    fetchdata();


  }

  const handleupdate = async(index)=>{
    const update = prompt("edit your task" ,todos[index].task)
    await axios.put(`http://localhost:3000/todoList/${todos[index].id}`,{"id":todos[index].id,"task":update})
    fetchdata()
    // let copy = [...todos];

    // console.log(copy , "checkingggggg");

    // copy[index].task=update

    // setTodos(copy)






  }


  return <div>

    <h1>Todo Task arun changeing datas</h1>
    <label className="mx-3">Task</label>
    <input type="text" value={input} onChange={handlechange} />
    <button onClick={handleadd}  className="mx-3 btn btn-primary">Add task</button>
   
 

    {todos.map((to,index)=>
        <div className="mx-3" key={to.id}>{to.task}
         <button onClick={()=>handledele(to.id)} className="mx-3 my-3 btn btn-danger">Delete</button>
         <button onClick={()=>handleupdate(index)} className="mx-3 my-3 btn btn-secondary">Edit</button>
        </div>


    )}




  </div>;
}

export default Crud;
