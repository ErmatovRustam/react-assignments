import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      LanguageId: '',
     }
  }
  
  render() { 
   return (
    <div className="App">
       <Router>
         <ul>
                    <li> <Link to ='/'>Home</Link></li>
                    <li><Link to ='/java'>Java</Link></li>
                    <li><Link to ='/python'>Python</Link></li>
                    <li><Link to ='/javascript'>Javascript</Link></li>    
            </ul> 
        <Nav />
        
      </Router>
    </div>
  );
  }
}
 
export default App;