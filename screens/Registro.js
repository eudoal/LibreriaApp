import 'react-native-gesture-handler'
import React, { Component } from 'react';
import {View,} from 'react-native';
import RegistroComponent from '../components/RegistroComponent';
import ActionBarImage from '../components/actionBarImage';

export default class Registro extends Component{

  static navigationOptions = {
    title: 'Regístrate Aquí',
      headerRight: () => <ActionBarImage />,
  };

  moveraLogin = () =>{
    this.props.navigation.navigate("LoginView")
  }
  render(){
    return (
      <View style={{flex:1}}>
        <RegistroComponent login={this.moveraLogin}/>
      </View>
    )
  }
}
