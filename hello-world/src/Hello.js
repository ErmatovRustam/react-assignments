import React, { Component } from 'react';
function Hello(props){   
        return (
            <div>
                <h1>Hello Dearest, {props.name} or {props.nickname}</h1>
            </div>
        );
}
export default Hello;