import React, { Component } from 'react';
import {connect} from 'react-redux';


class SearchComp extends Component {
  constructor(props){
    super(props);
    this.state={searchText:'',listBackup:false};
  }

  static getDerivedStateFromProps(nextProps,nextState){
    if(nextState.users !== nextProps.state.users)
    {
      return {users:nextProps.state.users, usersBackUp:nextProps.state.usersBackUp}
    }
    else{
      return null;
    }
  }

  searchText = e => {
    this.setState({ searchText: e.target.value })
    var string =  (e.target.value).toLowerCase();
    if (string !== "" && this.state.usersBackUp !== undefined){
      var users = this.state.usersBackUp.map((x,index)=>{
      if ((x['name']).toLowerCase().search(string) >= 0 || (x['email']).toLowerCase().search(string)>= 0){  return x}
     
    }).filter(  undefined => undefined)
      
      this.props.dispatch({type:'CREATEUSERSLIST', delta:users});
     }else{
     this.props.dispatch({type:'CREATEUSERSLIST', delta:this.state.usersBackUp});
    }
  }

  render() {
    return (
      <div className="search-line">
      <input type="text" placeholder="search.." onChange={this.searchText}/>
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