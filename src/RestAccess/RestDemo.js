import React, { Component } from 'react';
import axios from 'axios';


class RestDemo extends Component {
  constructor(props){
    super(props);
    this.state = {users:[], user:{}}
  }
  getAll = () =>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(
     res => this.setState({users:res.data})
    ).catch(err => console.log(err));
   
  }
  getByID = () =>{
    axios.get('https://jsonplaceholder.typicode.com/users/4').then(
     res => this.setState({user:res.data})
    ).catch(err => console.log(err));
   
  }

  add = () =>{
    var obj = {name:'Ssdf Ssdf',email:'sdfsd'};
    axios.post('https://jsonplaceholder.typicode.com/users/',obj).then(
    res =>{ console.log(res.data.id)}).catch(err => console.log(err));
   
  }

  update = () =>{
    var obj = {name:'Ssdf Ssdf',email:'sdfsd'};
    axios.post('https://jsonplaceholder.typicode.com/users/4',obj).then(
    res =>{ console.log(res.data.id)}).catch(err => console.log(err));
   
  }
  delete = () =>{
    axios.delete('https://jsonplaceholder.typicode.com/users/4').then(
    () =>{}).catch(err => console.log(err));
   
  }

  render() {

    var users = this.state.users.map((x,index)=>{
      return <h3 key={index}>{x.name}</h3>
    })

    var userDetails = () => {
      return <li>{this.state.user.name}</li>
    }
    return (
      <div className="App">
        <input type="button" value="get" onClick={this.getAll}/><br/>
        <input type="button" value="get by ID" onClick={this.getByID}/><br/>
        <input type="button" value="add" onClick={this.add}/><br/>
        <input type="button" value="update" onClick={this.update}/><br/>
        <input type="button" value="delete" onClick={this.delete}/><br/>
        {users}<br/>
        <ul>{userDetails}</ul>
      </div>
    );
  }
}

export default RestDemo;
