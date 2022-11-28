import React, { Component } from 'react'
import "./Style.css"

export default class Review extends Component {
    state={
         data:[
            {
              id: 1,
              name: 'Bertie Yates',
              age: 29,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
            },
            {
              id: 2,
              name: 'Hester Hogan',
              age: 32,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
            },
            {
              id: 3,
              name: 'Larry Little',
              age: 36,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
            },
            {
              id: 4,
              name: 'Sean Walsh',
              age: 34,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
            },
            {
              id: 5,
              name: 'Lola Gardner',
              age: 29,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
            },
          ]
          
    }
  render() {
    return (
      <div className='bg-color' >
        <h1>{this.state.data.length}  Birthdayoday</h1>
        {this.state.data.map(d=>
        <div key={d.id}>
            <img className='roundimg' src={d.image} height="300" width={300}/>
            <h1>{d.name}</h1>
            <h2>{d.age} years</h2>






        </div>
            
            
            
            )}




      </div>
    )
  }
}
