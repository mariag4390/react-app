import React, { Component } from 'react';
import './UsersComp.css';
import {connect} from 'react-redux';
import  { withRouter  } from 'react-router-dom';

class UserComp extends Component {
  constructor(props){
    super(props);
    this.state={activeUser:"",user:"", userID:"", userUpdate:[], name:'', email:'', street:'', city:'', zip:'', OtherData:false};
   
  }
  static getDerivedStateFromProps(nextProps,nextState){
    if(nextState.user.id !== nextProps.user.id || nextState.activeUser !== nextProps.state.activeUser)
    {     
      return {user:nextProps.user,activeUser:nextProps.state.activeUser};
    }
    else{
      return {user:nextState.user, OtherData:nextState.OtherData};
    }
  }

  handleChange = e => {
    const name = e.target.name;
    const  value = e.target.value;
    let userCopy = JSON.parse(JSON.stringify(this.state.user))
    if (name === "street" || name === "city" || name==="zipcode"){
      let addressCopy = JSON.parse(JSON.stringify(this.state.user.address))
      addressCopy[name] = value;
      userCopy["address"] =   addressCopy;
    }else{
      userCopy[name] = value;
    }
    this.setState({ user: userCopy })
  }

   showOtherData = (e) =>{
    
    if(window.screen.width > 820)
    {
      this.setState({OtherData:true})
    } 
  }
  toggleOtherData = (e) =>{ 

    this.setState({OtherData:!this.state.OtherData})

       
 }

  UpateUser = (e) =>{
    this.props.dispatch({type:'UPDATEUSER', delta: this.state.user});
    }

  DeleteUser = (e) =>{ 
     this.props.dispatch({type:'DELETEUSER', delta:this.state.user.id});
     if(this.state.user.id === this.state.activeUser){
      this.props.history.push('/');
     }
  }

  setActiveUser = (e) =>{
    this.props.dispatch({type:'SETACTIVEUSER', delta:this.state.user.id});
    this.props.history.push('/posts-and-todos/'+this.state.user.id);
  }

  componentDidUpdate(){}

  render() {
    return (
      
      <div className={'user-wrapper user-'+this.state.user.id}>
      
       <input type="button" value={"user id:"+this.state.user.id} className="btn-delete btn" onClick={this.setActiveUser}/>
        <p className="user-name">user name:  <input type="text" name="name" value={this.state.user.name} onChange={this.handleChange}/></p>
        <p className="user-email">user email:  <input type="text" name="email" value={this.state.user.email} onChange={this.handleChange}/></p>
        <input type="button" value="Other Data" className="btn-more btn" onClick={this.toggleOtherData} onMouseEnter={this.showOtherData}/>&nbsp;&nbsp;
        {this.state.OtherData && <div className="other-data">
          <p className="user-street">Street:  <input type="text" name="street" value={this.state.user.address.street} onChange={this.handleChange}/></p>
          <p className="user-city">City:  <input type="text" name="city" value={this.state.user.address.city} onChange={this.handleChange}/></p>
          <p className="user-zip">Zip Code:  <input type="text" name="zipcode" value={this.state.user.address.zipcode} onChange={this.handleChange}/></p>
    </div> }

        <input type="button" value="Update" className="btn-update btn" onClick={this.UpateUser}/>&nbsp;&nbsp;
        <input type="button" value="Delete" className="btn-delete btn" onClick={this.DeleteUser}/>
      </div>
     
    );
  }

  componentDidMount(){}
 
}

const mapStateToProps = (newState) =>
{
  return{ 
  state : newState
  }
}


export default withRouter(connect(mapStateToProps)(UserComp));
// <input type="button" value={"user id:"+this.state.user.id} className="user-id" onClick={this.showPosts}/> 
//<Link to={'/posts-and-todos/'+this.state.user.id}>{"user id:"+this.state.user.id}</Link>