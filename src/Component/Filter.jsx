import React, { useState } from 'react'
import "../App.css"

function Filter() {
    const[datas,setDatas]=useState([
        {
            name:"RAJ",
            id:1,
            dept:"cse"
        },
        {
            name:"Arun",
            id:2,
            dept:"it"
        },
        {
            name:"vicky",
            id:3,
            dept:"mech"
        },
        {
            name:"ram",
            id:4,
            dept:"cse"
        },
        {
            name:"sanjay",
            id:5,
            dept:"mech"
        },
        {
            name:"Roja",
            id:6,
            dept:"it"
        },
        {
            name:"jeevitha",
            id:7,
            dept:"cse"
        },

    ])

    const[datarender,setDatarender]=useState(datas)

    const depart = datas.map(data=>data.dept)
    console.log("all",depart);

    const uniqdept = [...new Set(depart)]

    uniqdept.unshift("All")

    // console.log("uniq",uniqdept);

    const handletab = (da)=>{

        if(da==="All"){
            setDatarender(datas)
            return
        }


        
        const filterdata = datas.filter(
            data => data.dept===da)
            setDatarender(filterdata)

        

    }



  return (
    <div>
        <h1>OUR Students</h1>
        
        {uniqdept.map(d=>
         <span onClick={()=>handletab(d)} className='heading'>{d}</span>
    )}

        {datarender.map(data=>
<div key={data.id}>
        <h1>{data.name}</h1>
        </div>       
            )}




    </div>
  )
}

export default Filter