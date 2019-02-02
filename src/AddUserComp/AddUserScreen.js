import React, { Component } from 'react';
import './AddUser.css';
import $ from "jquery";
import {connect} from 'react-redux';

class AddUserScreen extends Component {
  constructor(props){
    super(props);
    this.state={name:'', email:'', user:''};
   
  }
  
  addName = e => {
    this.setState({ name: e.target.value })
    
  }
  AddEmail = e => {

    this.setState({ email: e.target.value })
    
  }

  AddUser = (e) =>{ 
    console.log("name", this.state.name, "mail",this.state.email);
    //this.props.callbackParent({name:this.state.name, email:this.state.email})
    this.props.dispatch({type:'ADDNEWUSER', delta: {name:this.state.name, email:this.state.email}});
    //this.toggleLightbox();
    this.props.history.push('/')
  }

  Cancel = (e) =>{ 
   $('#alert-msg').show();
  }

  ClosePopUp = (e) =>{ 
    $('#alert-msg').hide();
   }

   ClosePopUpAndWindow = (e) =>{ 
    $('#alert-msg').hide();
    //this.props.showAddScreen(false);
    this.props.history.push('/')

   }

  render() {
    //console.log(this.state.name, this.state.email);
    return (
      
      <div className="AddUserScreen">
      <h1>Add new user</h1>
        
        <p className="user-name">user name:  <input type="text" name="name" placeholder={this.state.name} onChange={this.addName}/></p>
        <p className="user-email">user email:  <input type="text" name="email" placeholder={this.state.email} onChange={this.AddEmail}/></p>
        

        <input type="button" value="Add" className="btn-update btn" onClick={this.AddUser}/>&nbsp;&nbsp;
        <input type="button" value="Cancel" className="btn-delete btn" onClick={this.Cancel}/>
        <div id="alert-msg">
          <div className="pop-up-content">
            <p>are you sure you want to cancel this operartion?<br/>
            changes will not be saved.
            </p>
            <input type="button" value="no" className="btn-update btn" onClick={this.ClosePopUp}/>&nbsp;&nbsp;
            <input type="button" value="yes" className="btn-delete btn" onClick={this.ClosePopUpAndWindow}/>
          </div>
        </div>
      </div>
     
    );
  }

  componentDidMount()
  {
   // this.setState({ userUpdate: this.state.user })
    
  }
 
}
const mapStateToProps = (newState) =>
{
  return{ 
  state : newState
  }
}

export default connect(mapStateToProps)(AddUserScreen) ;

//export default AddUserScreen;
