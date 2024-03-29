import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddTodoComp extends Component {
  constructor(props){
    super(props);
    this.state={title:''};
   
  }
  static getDerivedStateFromProps(nextProps){
    return{userID: nextProps.userID}
  }

  addText = e => {
    this.setState({ title: e.target.value })
    
  }
 
  addTodo = (e) =>{ 
    this.props.dispatch({type:'ADDNEWTODO', delta: {title:this.state.title, userID:this.state.userID}});
    this.props.callbackParent()
  }

  Cancel = () =>{
    this.props.callbackParent()
  }

  

  render() {
    return (
      
      <div className="AddUserScreen">
      <p>Add new todo</p>
        
        <p className="user-name">title:  <input type="text" name="name" onChange={this.addText}/></p>

        <input type="button" value="Add" className="btn-update btn" onClick={this.addTodo}/>&nbsp;&nbsp;
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

 
}
const mapStateToProps = (newState) =>
{
  return{ 
  state : newState
  }
}

export default connect(mapStateToProps)(AddTodoComp) ;

//export default AddTodoComp;
