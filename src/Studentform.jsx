import { Button } from 'bootstrap'
import React, { Component } from 'react'

export default class Studentform extends Component {
    state={
        fname:"",
        lname:"",
        age:"",
        submit:false,
        password:'',
        confirmpassword:""
    }


    handle = (e) => {
       this.setState({[e.target.name]:e.target.value})
    }

    sub = ()=>{
if(this.state.password===this.state.confirmpassword){
        this.setState({submit:true})
}else{
  alert('password shoul match')
}

    }
   
  render() {
    return (
      <div>
        <h1>Form</h1>

        <label>Firstname</label>
        <input name='fname' value={this.state.fname} onChange={this.handle} />
        <label>lastname</label>
        <input name='lname' value={this.state.lname} onChange={this.handle} />
        <label>age</label>
        <input name='age' value={this.state.age} onChange={this.handle} />

        <br/>
        <label>Password</label>
        <input name='password' value={this.state.password} onChange={this.handle} />
        <label>confirmpassword</label>
        <input name='confirmpassword' value={this.state.confirmpassword} onChange={this.handle} />




           <br/>
       
        <button onClick={this.sub}>Submit</button>

       {this.state.submit && <div><h1>My name is::{this.state.fname}</h1>
        <h2>{this.state.lname}</h2>
        <h2>  {this.state.age}</h2></div>}

      

      </div>
    )
  }
}
