import React, { Component } from 'react';
import {connect} from 'react-redux';
import DAL from '../State/DALUtils';
import './TodosComp.css';
import TodoComp from './TodoComp';
import  { Link} from 'react-router-dom';
import AddTodoComp from '../AddTodoComp/AddTodoComp';

class TodosComp extends Component {
  constructor(props){
    super(props);
    this.state={showAddComp:false};
   
  }

  static getDerivedStateFromProps(nextProps,nextState){
    if(nextState !== nextProps)
    {  
      return {
      todos:nextProps.state.todos,
      userID:nextProps.userID
      }
      }else{return null;}
   }

  showAddComp=()=>{
    
    this.setState({showAddComp:true})
   
  }
  hideAddComp=()=>{
    
    this.setState({showAddComp:false})
  }

  unsetActive =() =>{

    this.props.dispatch({type:'SETACTIVEUSER', delta:""});
  }

  render() {
     if( this.state.todos !== undefined &&  this.state.todos !== "" && this.state.userID !== null){
       var todos = [];
      todos =this.state.todos;
      todos = todos.map((x,index) => {
      if(x.userId === parseInt(this.state.userID)){
        return <TodoComp key={index} todo = {x}/>
      }
      return true;
      })
    }
    
    return (
      <div className="todos-app">
      <div className="todos-header"><Link to={`/`} onClick={this.unsetActive} className="btn close">close</Link>
       <p>Todos - user {this.state.userID}</p> 
       </div>
       { !this.state.showAddComp && <div className="allTodos"> 
          <input type="button" className="add-btn" onClick={this.showAddComp} value="Add todo"/>
          {todos}
        </div>}
        { this.state.showAddComp && <div className="AddTodo">
        <AddTodoComp userID = {this.state.userID} callbackParent ={() => this.hideAddComp()}/> 
        </div>}
      </div>
     
    );
  }
 
  componentDidMount(){
    if ( this.state.todos === "" || this.state.todos === undefined){
     DAL.getData('https://jsonplaceholder.typicode.com/todos').then(res =>this.props.dispatch({type:'CREATETODOSLIST', delta:res.data}));
   }
   }
}

const mapStateToProps = (newState) =>
{
  return{ 
  state : newState
  }
}

export default connect(mapStateToProps)(TodosComp) ;


//export default TodosComp;
