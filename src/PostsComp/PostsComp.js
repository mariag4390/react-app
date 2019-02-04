import React, { Component } from 'react';
//import $ from "jquery";
import {connect} from 'react-redux';
import DAL from '../State/DALUtils';
import './PostsComp.css';
import PostComp from './PostComp';
import AddPostComp from '../AddPostComp/AddPostComp';

class PostsComp extends Component {
  constructor(props){
    super(props);
    this.state={showAddComp:false};
   
  }

  static getDerivedStateFromProps(nextProps,nextState){
    if(nextState !== nextProps)
    {  
      return {
      posts:nextProps.state.posts,
      userID:nextProps.userID
      }
      }else{return null;}
   }

   showAddComp=()=>{
    
    this.setState({showAddComp:true})
   
  }
  hideAddComp=()=>{
    
    this.setState({showAddComp:false})
  }


  render() {
     if( this.state.posts !== undefined &&  this.state.posts !== "" && this.state.userID !== null){
       var posts = [];
      posts =this.state.posts;
      posts = posts.map((x,index)=>{
      if(x.userId === parseInt(this.state.userID)){
        return <PostComp key={index} post = {x}/>
      }
      return true;
      })
    }
    
    return (
      <div className="posts-app">
     
      { !this.state.showAddComp && <div className="allPosts"> 
          <input type="button" className="add-btn" onClick={this.showAddComp} value="Add post"/>
          {posts}
        </div>}
        { this.state.showAddComp && <div className="AddPost">
        <AddPostComp userID = {this.state.userID} callbackParent ={() => this.hideAddComp()}/> 
        </div>}

      </div>
     
    );
  }
 
  componentDidMount(){
    if ( this.state.posts === "" || this.state.posts === undefined){
     DAL.getData('https://jsonplaceholder.typicode.com/posts').then(res =>this.props.dispatch({type:'CREATEPOSTSLIST', delta:res.data}));
   }
   }
}

const mapStateToProps = (newState) =>
{
  return{ 
  state : newState
  }
}

export default connect(mapStateToProps)(PostsComp) ;

