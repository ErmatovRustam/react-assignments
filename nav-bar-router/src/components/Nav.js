import React, { Component } from 'react';
import App from './../App'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './../App.css'

function Nav() {

    return (
        <nav>
            <Switch>
                    <Route exact path='/'>
                            <Home />
                    </ Route>

                    <Route exact path='/java:id' id = {this.state.LanguageId}>
                            <Java />
                    </ Route>

                    <Route exact path='/python'>
                            <Python />
                    </ Route>

                    <Route exact path='/javascript'>
                            <Javascript />
                    </ Route>
                </Switch>
        </nav>
    )  
}

export default Nav;




function Home() {
    return <h4></h4>
}

function Java() {
    return <h4>Java</h4>
}

function Python() {
    return <h4>Python</h4>
}

function Javascript() {
    return <h4>Javascript</h4>
}

