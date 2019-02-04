import React, { Component } from 'react';
import './TodosAndPostsView.css';
import TodosComp from '../TodosComp/TodosComp';
import PostsComp from '../PostsComp/PostsComp';

class TodosAndPostsView extends Component {
  constructor(props){
    super(props)
    this.state = {userID:[]}
  }
  static getDerivedStateFromProps(nextProps){
    return{userID: nextProps.match.params.userID}
  }
  render() {
    return (
      <div className="todos-posts-wrapper">
        <TodosComp userID={this.state.userID}/>
        <PostsComp userID={this.state.userID}/>
      </div>  
    );
  }
}



export default TodosAndPostsView;
//<PostsComp userid={this.state.userID}/>