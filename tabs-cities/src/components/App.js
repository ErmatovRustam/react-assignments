import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            tabs: [
                { id: 1, title: "London", content: "London is the capital city of England." },
                { id: 2, title: "Paris", content: "Paris is the capital of France." },
                { id: 3, title: "Tokyo", content: "Tokyo is the capital of Japan." },
                { id: 4, title: "Phoenix", content: "Phoenix is the capital of Arizona." },
                { id: 5, title: "Sacramento", content: "Sacramento is the capital of California." },
                { id: 6, title: "Montgomery", content: "Montgomery is the capital of Alabama." },
            ],
            activeId: 1
        }
    }

    onChange = (activeId) => {
        this.setState({activeId})
    }
    
    render() {
        const { tabs, activeId } = this.state;
        return (
            <div className = 'App'>
                <nav>
                    {
                        tabs.map(eachTab => {
                            const color = activeId === eachTab.id ? 'active' : '';                            
                            return <button key={eachTab.id} onClick={() =>this.onChange(eachTab.id)} id = {color}>{eachTab.title}</button>
                        })
                }
                </nav>
                <section>
                    <h1>{tabs[activeId-1].title}</h1>
                </section>
            </div>
        );
    }
} 
export default App;
