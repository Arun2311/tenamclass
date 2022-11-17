import React, { Component } from 'react'
import Film from "./Film"

export default class Count extends Component {
    state={
        inc:0
    }
   arun=()=>{
    this.setState({inc:this.state.inc+1})
   }

   sub = ()=>{
    this.setState({inc:this.state.inc-1})
   }
  render() {
    return (
      <div>
        <h1>Count</h1>
        <h2>{this.state.inc}</h2>
        <button onClick={this.arun}>ADD</button>
        <button onClick={this.sub}>Sub</button>
          
         
      </div>
    )
  }
}
