import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignupSignin from './app/screens/signup-signin';
import Home from './app/screens/home';

const RootStack = createStackNavigator(
  {
    Home: Home,
    SignupSignin: SignupSignin,
  },
  {
    initialRouteName: 'SignupSignin',
  }
);

const AppContainer = createAppContainer(RootStack);

class App extends React.Component {
  render(){
    return(
      <AppContainer/>
    )
  }
};

export default App;
