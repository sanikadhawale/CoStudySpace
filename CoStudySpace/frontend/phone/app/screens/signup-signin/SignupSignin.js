import React from 'react';
import {View,Text,Button,BackHandler} from 'react-native';

class SignupSignin extends React.Component {
  static navigationOptions = {
    title: 'CSS',
  }
  componentWillMount(){
    BackHandler.addEventListener('hardwareBackPress', function() {
      // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
      // Typically you would use the navigator here to go to the last state.
      return true;
    });
  }

  render(){
    return(
      <View>
        <Text>SignupSignin</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
};

export default SignupSignin;