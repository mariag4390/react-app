import React, { Component } from 'react';
import './App.css';
import  {Switch, Route, Link, withRouter} from 'react-router-dom';
import SearchComp from './SearchComp/SearchComp';
import AddUserBtn from './AddUserBtn/AddUserBtn';
import UsersComp from './UsersComp/UsersComp';
//import TodosComp from './TodosComp/TodosComp';
//import PostsComp from './PostsComp/PostsComp';
import AddUserScreen from './AddUserComp/AddUserScreen';

import AddPostComp from './AddPostComp/AddPostComp';
import Lightbox from './Lightbox/Lightbox';
import TodosAndPostsView from './TodosAndPostsView/TodosAndPostsView';
//import $ from "jquery";
import DAL from './State/DALUtils';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { ShowLightbox:false, dataDone:false}
  }
 


  // showAdduserScreen = (data) =>
  // {
  //   this.setState({ShowAddUserScreen:!this.state.ShowAddUserScreen})
  // }
  searchUsers = (users) =>
  {
    this.setState({backUsers:this.state.users})
    this.setState({users:users})
    
  }

  // toggleLightbox = () =>{
  //   this.setState({ShowLightbox:!this.state.ShowLightbox})
  // }

  render() {
    //console.log("render",this.state)
    return (
     
      
     <div  className="App">
      <SearchComp callbackParent ={(data) => this.searchUsers(data)}/>
        <AddUserBtn/>
        <div className="App-main">
       <div className="left-side">
        
         <UsersComp/>
       </div>
       <div className="right-side">
        <Switch>
        <Route exact path ="/" />
          <Route path ="/addUserScreen/:userID?" component={AddUserScreen}/>
          <Route path ="/posts-and-todos/:userID?" component={TodosAndPostsView}/>
          
        </Switch>
       </div>
       
       {this.state.ShowLightbox &&  <Lightbox  toggleLightbox={this.toggleLightbox} msg="the user was succesfully saved" />}
      
      </div>
      </div>
    );
  }
  componentDidMount(){
}
}
//  const mapStateToProps = (newState) =>
//  {
//    console.log(newState);
//    return{ 
//    state : newState
//    }
//  }
//export default connect(mapStateToProps)(App);

export default App;