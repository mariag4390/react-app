import React, { Component } from 'react';
import { log } from 'util';
import $ from "jquery";
// import './App.css';
import {connect} from 'react-redux';


class SearchComp extends Component {
  constructor(props){
    super(props);
    this.state={searchText:'',listBackup:false};
   
  }

  static getDerivedStateFromProps(nextProps,nextState){
    if(nextState.users !== nextProps.state.users)
    {
      return {users:nextProps.state.users}
    }
    else{
      return null;
    }

  }

  searchText = e => {
    if(!this.state.listBackup){
      this.setState({ usersBackUp: this.state.users })
      this.setState({ listBackup: true })
    }
    this.setState({ searchText: e.target.value })
    var string =  e.target.value;
    if (string !== "" && this.state.usersBackUp !== undefined){
      var users = this.state.usersBackUp.map((x,index)=>{
      if (x['name'].search(string) > 0 || x['email'].search(string)> 0){ return x}
      }).filter(undefined => undefined)
      this.props.dispatch({type:'CREATEUSERSLIST', delta:users});
     }
    else{
     this.props.dispatch({type:'CREATEUSERSLIST', delta:this.state.usersBackUp});
      }
    
  }

  render() {
    return (
      <div className="App">
      <input type="text" placeholder="Search" onChange={this.searchText}/>
      </div>
     
    );
  }

  componentDidMount(){
   this.props.dispatch({type:'GETUSERSLIST', delta:""});
   }
 
}


const mapStateToProps = (newState) =>
{
  return{ 
  state : newState
  }
}

export default connect(mapStateToProps)(SearchComp) ;

//export default SearchComp;