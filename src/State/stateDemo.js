import React, { Component } from 'react';

class StateDemo extends Component {
  constructor(props){
    super(props);
    this.state = {name : "sdf", age:24, adress:{city:'TLV',treet:'dgdfg'}, counter:0,textData=''}
  }
  
  changeName = () =>
  {
    this.setState(function(prevState,props)
    {
      return {name:"Dana", counter : prevState.counter + 1}
    }, ()=>{console.log(this.state.name)}
    )
  }

  setText = (e) =>
  {
    this.setState({dataText : e.target.value})
  }

  render() {
    return (
      <div className="App">
      <input type="text" onChange={this.setText}/>
        <input type="button" value="change name" onClick={this.changeName}/>
        Name is : {this.state.name}<br/>
        Age is : {this.state.age}<br/>
      </div>
    );
  }
}

export default StateDemo;
