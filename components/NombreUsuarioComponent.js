
import 'react-native-gesture-handler'
import React from 'react';
import {View,Text} from 'react-native';

export default class NombreUsuario extends React.Component {

  render() {
    return (
      <View>
        <Text style={{
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 5,
            marginBottom: 5,
            }}
            >Hola! {this.props.nom}</Text>

      </View>
    )
  }
}