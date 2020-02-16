import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import 'react-native-gesture-handler';
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


//importamos los componentes creados en la carpeta screens
import Registro from './screens/Registro'
import Inici from './screens/Inici'
import LoginView from './screens/LoginView'
import Añadir from './screens/Añadir'
import Modificar from './screens/Modificar'


// defaultNavigationOptions aquí el css
const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#ffffff',
  },

  headerTintColor: 'black',
  headerTitleStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
  }
};


export const Paginas = createStackNavigator(
  {
    LoginView: {screen:LoginView},
    Inici:{screen: Inici},
    Registro:{screen: Registro},
    Añadir:{screen:Añadir},
    Modificar:{screen:Modificar},
  },
  //la ruta inicial será el componente LoginView
  {initialRouteName: 'LoginView', defaultNavigationOptions},
);

//creamos el appcontainer que en la pantalla app se vayan mezclando todas las pantallas mientras realizamos la navegación
const AppContainer = createAppContainer(Paginas)

export default class App extends React.Component {
  render (){
    return(
        //AppContainer contiene todas las screens q hemos creado
        <AppContainer />
    
    )
  }
};



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


