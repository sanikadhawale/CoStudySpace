import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem } from 'reactstrap';
import Explore from './../../Pages/explore';
import Home from './../../Pages/home';
import Notifications from './../../Pages/notifications';
import Userprofile from './../../Pages/user-profile';
import SignUpSignIn from './../../Pages/sign-up-sign-in';
import './Routing.css';

class Routing extends Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      active: "home",
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  handleLogout = () => {
    this.props.handleLogout();
  }

  render(){
    return(
      <Router>
        <div>
          <Navbar dark expand="md" className="nav-bar">
            <NavbarBrand href="/"  style={{color: '#ffffff'}}>Co-Study-Space</NavbarBrand>
            <NavbarToggler onClick={this.toggle} style={{color: '#ffffff'}}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink 
                    href="/"
                    style={{color: '#ffffff'}} >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink 
                    href="/explore"
                    style={{color: '#ffffff'}} >
                    Explore
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink 
                    href="/notifications"
                    style={{color: '#ffffff'}} >
                    Notifications
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret style={{color: '#ffffff'}} >
                    Profile
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink 
                        href="/my-account"
                        style={{color: '#000000'}} >
                        My Account
                      </NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink 
                        href="/"
                        style={{color: '#000000'}} 
                        onClick={this.handleLogout}
                        >
                        Log Out
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
          <Route exact path="/" component={Home} />
          <Route path="/explore" component={Explore} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/my-account" component={Userprofile} />
          {/* <Route path="/signin" component={SignUpSignIn} /> */}
        </div>
      </Router>
    )
  }
}

export default Routing;