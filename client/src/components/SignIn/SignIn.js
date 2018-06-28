import React, { Component } from "react";

export default class SignIn extends Component {
    state = {

    }

    render () {
        return (
            <div>
                <div className="signInpContainer">
                <form id='form'>               
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