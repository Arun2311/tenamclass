import React, { Component } from 'react'

export default class Film extends Component {
    state={
        nooftic:0
    }
    handle=()=>{
        this.setState({nooftic:this.state.nooftic+1})
       }
    


  render() {
    return (
      <div>

        

        <h3>Movie Name::{this.props.window}</h3>
        <p>booking::{this.state.nooftic}</p><button onClick={this.handle} >Book tickets</button>

   










      </div>
    )
  }
}
