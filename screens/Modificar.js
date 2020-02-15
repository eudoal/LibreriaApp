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
import Modificar from '../components/ModificarComponent'

export default class ModificarExtras extends Component{

  //función creada para mover a la pagina de Inici que se le pasará como prop a ModificarAñadir  
  moveraInici = () =>{
    this.props.navigation.navigate("Inici")
  }
      render(){
        //la variable hr la obtenemos en el listado de los componentes al pulsar sobre el botón Modificar y 
        //será un objeto que se lo asignamos a x 
        let x = this.props.navigation.getParam('hr')

        return(
          <View>
            <Modificar text={"Añadir Detalles"} producto={x} inici={this.moveraInici}/>
          </View>
        )
      }
    }

//le pasamos al prop producto la variable x que en este caso es el objeto que queremos modificar y al prop inici la función de mover a inici