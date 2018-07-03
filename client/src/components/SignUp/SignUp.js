import React, { Component } from "react";
import logo from "./logo.png";
import "./SignUp.css";


export default class SignUp extends Component {
    state = {

    }

    render() {
        return (
            <div>
            <h4 className="signUpHeader">Enter Your Information Below to Sign Up!</h4>
            <div>
            <img class="logo" src={logo} alt={"logo"} style={{ height: 590, flex: 1, width: undefined, padding: 0 }}/>
          
                <div className="signUpContainer">
<<<<<<< Updated upstream
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
                 
=======
>>>>>>> Stashed changes
                    <form>
                        <div className="form-group">
                            <label className="firstName" for="exampleInputFirstName">First Name</label>
                            <input className="firstNameInput" type="firstName" className="form-control" id="exampleInputFirstName" aria-describedby="firstNameHelp" placeholder="Enter First Name" />
                        </div>
                        <div className="form-group">
                            <label className="lastName" for="exampleInputLastName">Last Name</label>
                            <input className="lastNameInput" type="lastName" className="form-control" id="exampleInputLastName" aria-describedby="lastNameHelp" placeholder="Enter Last Name" />
                        </div>
                        <div className="form-group">
                            <label className="signIn" for="exampleInputEmail1">Email address</label>
                            <input className="emailInput" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
<<<<<<< Updated upstream
                        <button type="submit" class="btn btn-secondary">Sign Up</button>
=======
                        <button type="submit" className="btn btn-warning">Sign Up</button>
>>>>>>> Stashed changes
                    </form>
                </div>
                </div>
            </div>
        )
    }
}