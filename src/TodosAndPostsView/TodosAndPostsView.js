import React, { Component } from 'react';
import './TodosAndPostsView.css';
import TodosComp from '../TodosComp/TodosComp';
import PostsComp from '../PostsComp/PostsComp';
import  {Switch, Route, Link} from 'react-router-dom';

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
      <div className="AddUserScreen">
        <TodosComp userID={this.state.userID}/>
        <PostsComp userID={this.state.userID}/>
      </div>  
    );
  }
}



export default TodosAndPostsView;
//<PostsComp userid={this.state.userID}/>