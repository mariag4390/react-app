import React, { Component } from 'react';
import {connect} from 'react-redux';
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
     this.props.dispatch({type:'UPDATETODO', delta:postCopy});
    }


  render() {
    
    return (
    
      <div className="post-div">
       
       <p><b>title:</b> {this.state.post.title}</p>
       <p><b>body:</b> {this.state.post.body}</p>
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

export default connect(mapStateToProps)(PostComp) ;


