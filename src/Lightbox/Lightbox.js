import React, { Component } from 'react';
import './Lightbox.css';
import $ from "jquery";

class Lightbox extends Component {
  constructor(props){
    super(props);
    this.state={msg:"",toggleLightbox:false};
  }

  static getDerivedStateFromProps(nextProps,nextState){
    if(nextState.msg !== nextProps.msg)
    {
      return {msg:nextProps.msg}
    }
    else{
      return {msg:nextState.msg};
    }

  }
  
  toggleLightbox = () =>{
    this.props.toggleLightbox();
  }


  render() {
   // console.log(this.state.msg);
    setTimeout(function(){  this.toggleLightbox(); } .bind(this), 3000);
    return (
      <div id="Lightbox">
        <div className="Lightbox-content">
          <p>{this.state.msg}</p>
        </div>
      </div>

    );
  }
 
}


export default Lightbox;
