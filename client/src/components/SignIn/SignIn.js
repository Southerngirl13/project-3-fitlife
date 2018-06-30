import React, { Component } from "react";
import "./SignIn.css";

export default class SignIn extends Component {
    state = {

    }

    render () {
        return (
            <div>
                <div className="signInContainer">
                <form id='form' align="center">               
                      <input className='input' type="text"  
                       placeholder="Email"/>          
                      <input className='input' type="password" 
                       placeholder="Password"/>
                      <button id='submit'>Sign In</button>
                  </form>
                  </div>
            </div>
        )
    }
}