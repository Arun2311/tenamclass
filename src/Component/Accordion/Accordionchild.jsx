import React, { Component } from "react";

export default class Accordionchild extends Component {
    state={
        showinfo:false
    }

    handle=()=>{
        this.setState({showinfo:!this.state.showinfo})
    }
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        

{this.state.showinfo && <p>{this.props.info}</p>

  }

<button onClick={this.handle}>{this.state.showinfo?'-':"+"}</button>

      </div>
    );
  }
}
