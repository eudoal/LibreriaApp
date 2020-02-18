import React, { Component } from 'react';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import LoginViewComponent from '../components/LoginViewComponent';
import ActionBarImage from '../components/actionBarImage';

export default class LoginView extends Component {

  static navigationOptions = {
    title: 'Loguéate aquí',
      headerRight: () => <ActionBarImage />,
  };

  moveraInici=({n})=>{

   this.props.navigation.navigate("Inici",{nusu:n})
  }

  moveraRegistro = () =>{
    this.props.navigation.navigate("Registro")
  }

  render() {
    return (
      <View style={{flex:1}}>
      <LoginViewComponent inici={this.moveraInici} registro={this.moveraRegistro} />
      </View>
    );
  }
}
