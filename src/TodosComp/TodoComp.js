import React, { Component } from 'react';
import {connect} from 'react-redux';
import './TodosComp.css';


class TodoComp extends Component {
  constructor(props){
    super(props);
    this.state={todo:[]};
   
  }

  static getDerivedStateFromProps(nextProps,nextState){
    if(nextState.todo !== nextProps.todo)
    {  return {todo:nextProps.todo};
    }else{return {todo:nextState.todo}}
    }

   checkComplete = () =>
    {
     
      let todoCopy = JSON.parse(JSON.stringify(this.state.todo))
      todoCopy["completed"] = true;
     this.props.dispatch({type:'UPDATETODO', delta:todoCopy});
    }


  render() {

    var completed = this.state.todo.completed ? 'true': 'false';
    var btn = "";
    if (!this.state.todo.completed){
     btn = <input type="button" className="btn" value="Mark Completed" onClick={this.checkComplete}/>; 
    }
    return (
    
      <div className="todo-div">
       
       <p><b>title:</b> {this.state.todo.title}</p>
       <p><b>completed:</b> {completed}</p>
       {btn}
      </div>
     
    );
  }
 

}

const mapStateToProps = (newState) =>
{
  return{ 
  state : newState
  }
}

export default connect(mapStateToProps)(TodoComp) ;


//export default TodosComp;
