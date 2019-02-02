import React, { Component } from 'react';
import DAL from '../State/DALUtils';
import {connect} from 'react-redux';
import UserComp from './UserComp';
import './UsersComp.css';
//import $ from "jquery";

class UsersComp extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  static getDerivedStateFromProps(nextProps,nextState){
    //onsole.log(nextProps,nextState);
   if( nextState.users !== nextProps.state.users || nextState.todos !== nextProps.state.todos || nextState.activeUser !== nextProps.state.activeUser)
    { 
    return {users:nextProps.state.users, todos:nextProps.state.todos,activeUser:nextProps.state.activeUser}}
    else{
      return null
    }

  }

  onChildChanged = (dataNew) =>
  {
    if(dataNew.shouldUpdate === true){
      this.props.dispatch({type:'UPDATEUSER', delta: dataNew.user})
    }
    if(dataNew.shouldDelete === true){
      this.props.dispatch({type:'DELETEUSER', delta:dataNew.userid})
    } 
  }

 

  render() {
    var users = [];
    var todos = [];
    todos= this.state.todos;
    users = this.state.users;
    
     if( this.state.users !== "" && this.state.users !== undefined && this.state.todos !== undefined && this.state.todos !== ""){
       users = users.map((x,index)=>{
         var addClass=false;
         
         if(x.id === this.state.activeUser){addClass=true;}
       var redBorder= false;
       var userTodos = todos.filter(todo => todo.userId == x.id);
         for (var i=0; i < userTodos.length; i++){
            if (!userTodos[i].completed){
                redBorder=true; 
                break;
            }
         }
         //console.log(userTodos);
         //console.log(x.id, redBorder)

        
         return <li className={(redBorder?"red-border":"gray-border") + (addClass ? ' active' : '')} key={index}><UserComp  user={x} /></li>
       })
    }
     
    return (
      
      <div className="Users">
       <ul className="users-list">{users}</ul>
       
      </div>
     
    );
  }
 
  componentDidUpdate(){ }

  componentDidMount(){
    let users=''
    let todos='';
  DAL.getData('https://jsonplaceholder.typicode.com/users')
    .then((res) =>{
       users = res.data;
      DAL.getData('https://jsonplaceholder.typicode.com/todos')
      .then((res) =>{
         todos = res.data
        this.props.dispatch({type:'CREATEDATA', delta:{'users':users,'todos':todos}});
      })
     // this.props.dispatch({type:'CREATEUSERSLIST', delta:res.data});
    })
  }
}

const mapStateToProps = (newState) =>
{
  //console.log('newState',newState);
  return{ 
  state : newState
  }
}

export default connect(mapStateToProps)(UsersComp) ;
