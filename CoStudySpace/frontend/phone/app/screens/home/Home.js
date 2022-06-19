import React from 'react';
import {View,Text,} from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    title:'Home',
    headerLeft: null,
  }

  render(){
    return(
      <View>
        <Text>Home</Text>
      </View>
    )
  }
};

export default Home;