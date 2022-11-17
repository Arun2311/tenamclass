// import React, { Component } from 'react'

// export default class Fun extends Component {
//   render() {
//     return (
//       <div>Fun</div>
//     )
//   }
// }


import React, { useState } from "react";

function Fun(){

    const[name,setName] = useState("Arun")
    const [count , setCount]=useState(0)



 const handleadd = ()=>{
    setCount(count+1)
}


    return(

        <div>
            <h1>{name}</h1>
            <h2>{count}</h2>
            <button onClick={handleadd}>add</button>
        </div>

    )

}

export default Fun