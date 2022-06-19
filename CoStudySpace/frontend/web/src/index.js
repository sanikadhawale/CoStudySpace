import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Routing from './Components/navigation';
import SignUpSignIn from './Pages/sign-up-sign-in'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
NavbarBrand,
Navbar } from 'reactstrap';

import './index.css';

class Main extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  changeLoginState = () => {
    this.setState({isLoggedIn: !this.state.isLoggedIn});
  }

  render(){
    return(
      <React.Fragment>
        {
          this.state.isLoggedIn ? <Routing handleLogout={this.changeLoginState} /> : (
            <React.Fragment>
              <Navbar dark expand="md" className="nav-bar">
                <NavbarBrand href="/"  style={{color: '#ffffff'}}>Co-Study-Space</NavbarBrand>
              </Navbar>
              <SignUpSignIn handleLogout={this.changeLoginState}/>
            </React.Fragment>
          )
        }
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
