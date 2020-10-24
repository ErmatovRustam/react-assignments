import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            tabs: [
                 
                {
                    id: 1, title: "London", content: "London is the capital city of England.",
                    imgSrc: 'https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTYyNDg1MjE3MTI1Mjc5Mzk4%2Ftopic-london-gettyimages-760251843-promo.jpg'
                },
                {
                    id: 2, title: "Paris", content: "Paris is the capital of France.",
                    imgSrc: 'https://img.theweek.in/content/dam/week/leisure/travel/images/2018/7/21/paris-1.jpg'
                },
                {
                    id: 3, title: "Tokyo", content: "Tokyo is the capital of Japan.",
            imgSrc: 'https://cdn-image.departures.com/sites/default/files/1576002985/header-tokyo-japan-LUXETOKYO1219.jpg'    },
                {
                    id: 4, title: "Phoenix", content: "Phoenix is the capital of Arizona.",
                imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGHnMc5iZV7x0MH9o7F5k7xped8SCtSvzU-g&usqp=CAU'},
                {
                    id: 5, title: "Sacramento", content: "Sacramento is the capital of California.",
            imgSrc: 'https://assets.6sigma.us/wp-content/uploads/2015/01/IMG-0003.jpg'    },
                {
                    id: 6, title: "Montgomery", content: "Montgomery is the capital of Alabama.",
            imgSrc: 'https://d.newsweek.com/en/full/1351142/montgomery-alabama-travel.jpg'    },
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

                <p>
                    <h1>{tabs[activeId-1].content}</h1>
                </p>

                <div>
                    <img id = 'img' src = {tabs[activeId-1].imgSrc} alt = 'city photo' />
                </div>
            </div>
        );
    }
} 
export default App;
