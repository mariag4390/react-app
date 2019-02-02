import React, { Component } from 'react';
import Child from './Child';


class Parent extends Component {
  constructor(props){
    super(props);
    this.state = {data : 'hi'}
  }
  changeData= ()=>{
      this.setState({datat:'bye'})
  }

  render() {
    console.log('parent render')
    return (
      
      <div className="App">
        
       Parent

       <input type="button" value="change data" onClick={this.changeData}/>
      </div>
     
    );
  }
 
}

export default Parent;
