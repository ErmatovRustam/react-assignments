import React, { Component } from 'react';
import Hello from './Hello';
import Bye from './Bye'
import'./App.css'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Hello name='Rus' nickname = 'ok'> This is children tag</Hello>
                <Hello name='Alymbek' nickname = 'Pushka'/>
                <Hello name='Kojo' nickname='Genius' />
                
                <Bye name='Rus' nickname = 'ok'> This is children tag</Bye>
                <Bye name='Alymbek' nickname = 'Pushka'/>
                <Bye name='Kojo' nickname = 'Genius'/>
            </div>
        );
    }
}
export default App;
