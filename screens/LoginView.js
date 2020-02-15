import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import 'react-native-gesture-handler';
import LoginViewComponent from '../components/LoginViewComponent';

export default class LoginView extends Component {

  //Funciones que le pasaremos al hijo en forma de prop. En moveraInici realizará la navegación 
  //a la pantalla Inici y el valor nusu
  //obtendrá lo que es n que es pasado por parámetro en el componente hijo que es LoginViewComponent
  moveraInici=({n})=>{

   this.props.navigation.navigate("Inici",{nusu:n})
  }

  //En moveraRegistro realizará la navegación a la pantalla Registro que se le pasará 
  //como un prop al componente hijo LoginViewComponent
  moveraRegistro = () =>{
    this.props.navigation.navigate("Registro")
  }

  render() {
    //Se invoca al componente LoginViewComponent situado en la carpeta de Components y 
    //le pasaremos las funciones en forma de props con sus nombres
    return (
      <View style={{flex:1}}>
      <LoginViewComponent inici={this.moveraInici} registro={this.moveraRegistro} />
      </View>
    );
  }
}
