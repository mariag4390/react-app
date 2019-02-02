import React, { Component } from 'react';

class ContactPhone extends Component {
  constructor(props){
    super(props)
    this.state = {idVal:''}
  }

static getDerivedStateFromProps(nextProps){
  return{idVal: nextProps.match.params.ID}
}

getDataFromServer(){

}

componentDidMount(){
 this.getDataFromServer();
}

componentDidUpdate(){
  this.getDataFromServer();
 }
  render() {
    return (
      <div className="">
        
     <p>contact by phone</p>
     
      </div>
    );
  }
}

export default ContactPhone;
