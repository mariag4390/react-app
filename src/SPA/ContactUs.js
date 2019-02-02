import React, { Component } from 'react';
import ContactEmail from './ContactEmail';
import ContactPhone from './ContactPhone';
class Contact extends Component {
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
      <div className="App">
        
     <p>contact us</p>
    
     <nav>
          <ul>
            <li><Link to={`${this.props.match.url}/Email`}>Contact us by email</Link></li>
            <li><Link to={`${this.props.match.url}/Phone`}>Contact us by phone</Link></li>
          </ul>
        </nav>
       
       <Switch>
       
          <Route path ={`${this.props.match.url}/Email`} component={ContactEmail}/>
          <Route path ={`${this.props.match.url}/Phone`} component={ContactPhone}/>
         </Switch>

      </div>
    );
  }
}

export default Contact;
