import React, { Component } from "react";
import "./SignUp.css";

export default class SignUp extends Component {
    state = {

    }

    render() {
        return (
            <div>
            <h4 className="signUpHeader">Enter Your Information Below to Sign Up!</h4>
                <div className="signUpContainer">
                    {/* <form id='form'>       
                      <input className='input' type="text"   
                       placeholder="First Name"/>
                      <input className='input' type="text"  
                       placeholder="Last Name"/>          
                      <input className='input' type="text"  
                       placeholder="Email"/>          
                      <input className='input' type="password" 
                       placeholder="Password"/>
                      <button id='submit'>Sign Up</button>
                  </form> */}
                    <form>
                        <div className="form-group">
                            <label className="firstName" for="exampleInputFirstName">First Name</label>
                            <input className="firstNameInput" type="firstName" class="form-control" id="exampleInputFirstName" aria-describedby="firstNameHelp" placeholder="Enter First Name" />
                        </div>
                        <div className="form-group">
                            <label className="lastName" for="exampleInputLastName">Last Name</label>
                            <input className="lastNameInput" type="lastName" class="form-control" id="exampleInputLastName" aria-describedby="lastNameHelp" placeholder="Enter Last Name" />
                        </div>
                        <div className="form-group">
                            <label className="signIn" for="exampleInputEmail1">Email address</label>
                            <input className="emailInput" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-warning">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}