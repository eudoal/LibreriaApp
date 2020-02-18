import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  Alert,
  FlatList,
  TextInput,
  TouchableOpacity,

  
  
} from 'react-native';
import { exportDefaultSpecifier, tsImportEqualsDeclaration } from '@babel/types';

import 'react-native-gesture-handler';
import ModificarAñadir from '../components/ModificarAñadirComponent';

import ActionBarImage from '../components/actionBarImage';

export default class Añadir extends Component{

  static navigationOptions = {
    title: 'Añade aquí tu Libro',
      headerRight: () => <ActionBarImage />,
//      headerStyle: {
//        backgroundColor: '#e3e3e3',
//      },
//      headerTintColor: '#606070',
  };

  //creamos una función que nos permita la navegación a la pantalla de Inici
  moveraInici = () =>{
    this.props.navigation.navigate("Inici")
  }

  //le pasamos el prop con la función de moverInici y un prop de producto que está vacío. 
      render(){
        return(
          <View>
            <ModificarAñadir text={"Añadir un Libro"} producto={""} inici={this.moveraInici}/>
          </View>
    
        )
      }
    
    }

