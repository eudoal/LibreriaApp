import 'react-native-gesture-handler'
import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Button,FlatList,Text,StatusBar,} from 'react-native';
import { Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import NombreUsuario from '../components/NombreUsuarioComponent'
import ListadoProductos from '../components/ListadoComponent'
import ActionBarImage from '../components/actionBarImage';

export default class Inici extends React.Component {
  static navigationOptions = {
    title: 'Listado de mis Libros',
      headerRight: () => <ActionBarImage />,
  };

  MOVERSE=({i})=>{
    this.props.navigation.navigate("Modificar",{hr:i})
  }

    render(){
      let nombreUsu= this.props.navigation.getParam('nusu')
     return (
        <View style={{flex:1,backgroundColor:"white"}}>
            <View >
            <NombreUsuario nom={nombreUsu}/>
            </View>
              <View style={[{marginTop: 5,marginBottom: 5,width: "100%",justifyContent: 'center',alignItems: 'center'}]}>
                <Button  color="#B59345" title={"AÑADIR LIBRO"} onPress={()=>this.props.navigation.navigate("Añadir")}/>
              </View>
            <View style={{flex:10/12}}>
            <ListadoProductos mover={this.MOVERSE} />
                <View style={{backgroundColor:"yellow"}}>
                </View>
            </View>
        </View>
     );
   };
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


