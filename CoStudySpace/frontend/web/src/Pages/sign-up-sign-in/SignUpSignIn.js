import React, { Component } from 'react';
import './SignUpSignIn.css';

class SignUpSignIn extends Component{
  handleLogout = () => {
    this.props.handleLogout();
  }
  render(){
    return(
      <React.Fragment>
        <div>SIGN UP SIGN IN</div>
        <button onClick={this.handleLogout}>signin</button>
      </React.Fragment>
    )
  }
}

export default SignUpSignIn;