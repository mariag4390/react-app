import React, { Component } from 'react';
import './App.css';
import  {Switch, Route} from 'react-router-dom';
import SearchComp from './SearchComp/SearchComp';
import AddUserBtn from './AddUserBtn/AddUserBtn';
import UsersComp from './UsersComp/UsersComp';
import AddUserScreen from './AddUserComp/AddUserScreen';
import TodosAndPostsView from './TodosAndPostsView/TodosAndPostsView';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { ShowLightbox:false, dataDone:false}
  }
 
  searchUsers = (users) =>
  {
    this.setState({backUsers:this.state.users})
    this.setState({users:users})
    
  }

  render() {
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
       
  
      
      </div>
      </div>
    );
  }
  componentDidMount(){
}
}


export default App;