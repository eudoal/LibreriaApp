import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class ActionBarImage extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
       <Image source={require('../images/logoCabezera.png')} style={{width: 40, height: 40, marginRight:15}} />
      </View>
    );
  }
}