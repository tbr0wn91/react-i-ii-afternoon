import React, { Component } from 'react';
import "./navbar.css";

export default class NavBar extends Component{
    constructor(){
        super();

        this.state = {

        }
    }


    render(){
        console.log(this.props)
        return (
            <div className="navbar">
               <div className='buttons' > 
                <button onClick= {this.props.goBackwardFn}>Previous</button>
                <button onClick= {this.props.goForwardFn}>Next</button>
               </div>
            </div>
        )
    }
}