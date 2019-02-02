import React, { Component } from 'react';
import DALUtils from '../State/DALUtils.js';


class RestDemoDAL extends Component {
  constructor(props){
    super(props);
    this.state = {users:[], user:{}}
  }
  getAll = () =>{
    DALUtils.getData('https://jsonplaceholder.typicode.com/users').then(res => this.setState({users:res.data}))
   
  }
  getByID = () =>{
   
   
  }

  add = () =>{
    
   
  }

  update = () =>{
    
   
  }
  delete = () =>{
   
   
  }

  render() {

   
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default RestDemoDAL;
