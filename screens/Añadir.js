import React, {Component} from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import ModificarAñadir from '../components/ModificarAñadirComponent';
import ActionBarImage from '../components/actionBarImage';
export default class Añadir extends Component{

  static navigationOptions = {
    title: 'Añade aquí tu Libro',
      headerRight: () => <ActionBarImage />,

  };

  //creamos una función que nos permita la navegación a la pantalla de Inici
  moveraInici = () =>{
    this.props.navigation.navigate("Inici")
  }

  //le pasamos el prop con la función de moverInici y un prop de producto que está vacío. 
      render(){
        return(
          <View>
            <ModificarAñadir  producto={""} inici={this.moveraInici}/>
          </View>
    
        )
      }
    
    }

