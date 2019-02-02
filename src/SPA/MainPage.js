import React, { Component } from 'react';
import  {Switch, Route, Link} from 'react-router-dom'
import Contact from './ContactUs'
import About from './AboutUs'

class MainPage extends Component {
  constructor(props){
    super(props)
    this.state = {id:3}
  }
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><Link to={`/contact/${this.state.id}`}>Contact us</Link></li>
            <li><Link to="/about/2">About us</Link></li>
          </ul>
        </nav>
       
       <Switch>
       <Route exact path ="/" component={Contact}/>
          <Route path ="/contact/:ID" component={Contact}/>
          <Route path ="/about/:?ID" component={About}/>
         </Switch>
       
      </div>
    );
  }
}

export default MainPage;
