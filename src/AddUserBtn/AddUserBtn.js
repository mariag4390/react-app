import React, { Component } from 'react';
import './AddUserBtn.css';
import  { Link} from 'react-router-dom';

class AddUserBtn extends Component {
  addUser = (e) =>{
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
