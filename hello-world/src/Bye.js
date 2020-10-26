import React, { Component } from 'react';

class Bye extends Component {
    state = {  }
    render() { 
        return (<h1>Goodbye, {this.props.name}</h1> );
    }
}
 
export default Bye;