import React, {Component} from 'react';
import {View} from 'react-native';
import ActionBarImage from '../components/actionBarImage';
import 'react-native-gesture-handler';
import Modificar from '../components/ModificarComponent'

export default class ModificarExtras extends Component{

  static navigationOptions = {
    title: 'Modifica lo que quieras',
      headerRight: () => <ActionBarImage />,
  };

  moveraInici = () =>{

    this.props.navigation.navigate("Inici")
  }
      render(){
        let x = this.props.navigation.getParam('hr')

        return(
          <View>
            <Modificar text={"Añadir Detalles"} producto={x} inici={this.moveraInici}/>
          </View>
        )
      }
  }