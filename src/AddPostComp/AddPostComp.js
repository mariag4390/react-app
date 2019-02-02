import React, { Component } from 'react';
import './AddPostComp.css';
import $ from "jquery";
import {connect} from 'react-redux';

class AddPostComp extends Component {
  constructor(props){
    super(props);
    this.state={title:''};
   
  }
  static getDerivedStateFromProps(nextProps){
    return{userID: nextProps.userID}
  }

  addTitle = e => {
    this.setState({ title: e.target.value })
  }

  addBody = e => {
    this.setState({ body: e.target.value })  
  }
 
  addPost = (e) =>{ 
   //console.log(this.state.title,this.state.userID);
    this.props.dispatch({type:'ADDNEWPOST', delta: {title:this.state.title,body:this.state.body, userID:this.state.userID}});
    //this.toggleLightbox();
    this.props.callbackParent()
  }

  Cancel = () =>{
    this.props.callbackParent()
  }

  

  render() {
    //console.log(this.state.name, this.state.email);
    return (
      
      <div className="AddUserScreen">
      <p>Add new post</p>
        
        <p className="user-name">title:  <input type="text" name="name" onChange={this.addTitle}/></p>
        <p className="user-name">body:  <input type="text" name="name" onChange={this.addBody}/></p>

        <input type="button" value="Add" className="btn-update btn" onClick={this.addPost}/>&nbsp;&nbsp;
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

export default connect(mapStateToProps)(AddPostComp) ;

//export default AddTodoComp;
