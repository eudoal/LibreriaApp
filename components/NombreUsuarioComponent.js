/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler'
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class NombreUsuario extends React.Component {

  render() {
    //this.props.nom es lo que le pasamos a nusu en la pantalla Inici como prop  dentor del componente NombreUsuario <NombreUsuario nom={nombreUsu}/>
    return (
      <View>
        <Text>Bienvenido, {this.props.nom}</Text>

      </View>


    )

  }

}