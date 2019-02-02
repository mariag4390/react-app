import React, { Component } from 'react';
//import $ from "jquery";
import {connect} from 'react-redux';
import DAL from '../State/DALUtils';
import './PostsComp.css';


class PostComp extends Component {
  constructor(props){
    super(props);
    this.state={post:[]};
   
  }

  static getDerivedStateFromProps(nextProps,nextState){
    if(nextState.post !== nextProps.post)
    {  return {post:nextProps.post};
    }else{return {post:nextState.post}}
    }

   checkComplete = () =>
    {
     
      let postCopy = JSON.parse(JSON.stringify(this.state.post))
      postCopy["completed"] = true;
     // console.log(todoCopy)
      //this.setState(() =>({todo:todoCopy}))
     this.props.dispatch({type:'UPDATETODO', delta:postCopy});
    }


  render() {
    //console.log('render',this.state.todo)
    //var completed = this.state.post.completed ? 'true': 'false';
    var btn = "";
    
    return (
    
      <div className="post-div">
       
       <p><b>title:</b> {this.state.post.title}</p>
       <p><b>body:</b> {this.state.post.body}</p>
      </div>
     
    );
  }
 
  componentDidMount(){
   // this.props.dispatch({type:'GetTodo', delta:this.state.todoID});
  }
}

const mapStateToProps = (newState) =>
{
  //console.log(newState);
  return{ 
  state : newState
  }
}

export default connect(mapStateToProps)(PostComp) ;


//export default TodosComp;
