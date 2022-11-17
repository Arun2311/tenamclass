import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Api() {
    const[todo,setTodo]=useState([""])

const fetchdata=()=>{
    fetch("https://dummyjson.com/products").
    then(response=>response.json()).
    then(abc=>setTodo(abc.products))
    

}

    useEffect(()=>{
        fetchdata()
    },[])

// const handledelete=(arun)=>{
//     let newlist = todo.filter(to => to.id !== arun)
// setTodo(newlist)


// }

  return (
    <div>
        {todo.map(to=>

        <div key={to.id}>
            <img src={to.images}/>
            <h1>{to.title}</h1>
            <p>{to.description}</p>
            {/* <button onClick={()=>handledelete(to.id)} className='btn btn-danger'>Delete</button> */}


            </div>

         
            
            
            )}


{/* <button onClick={fetchdata} className='btn btn-primary'> Refresh</button> */}









    </div>
  )
}

export default Api