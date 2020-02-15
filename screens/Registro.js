import 'react-native-gesture-handler'
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import RegistroComponent from '../components/RegistroComponent';


export default class Registro extends Component{

  //función creada para moverse a la screen de LoginView
  moveraLogin = () =>{
    this.props.navigation.navigate("LoginView")
  }

  //le pasamos al componente RegistroComponente la función moverLogin a través de un prop
  render(){
    return (
      <View style={{flex:1}}>
        <RegistroComponent login={this.moveraLogin}/>
      </View>
    )
  }
}
