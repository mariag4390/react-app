import React, { Component } from 'react';
import './AddUserBtn.css';
import  {Switch, Route, Link} from 'react-router-dom';

class AddUserBtn extends Component {
  addUser = (e) =>{
    //this.props.callbackParent({'show':true})
    this.props.history.push('/addUserScreen/')
  }

  render() {
    return (
      <div className="AddUserBtn">
      
      <Link to={`/addUserScreen/`}>Add new user</Link>
      </div>
     
    );
  }
 
}

export default AddUserBtn;
//<input type="button" value="Add User" onClick={this.addUser}/>