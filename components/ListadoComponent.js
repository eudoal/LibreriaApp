import 'react-native-gesture-handler';
import FontAwesome from 'react-fontawesome';

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  FlatList,
  pre,
  StatusBar,
  ActivityIndicator, Platform
} from 'react-native';
import { SearchBar, CheckBox } from 'react-native-elements';

  let estado = true;


export default class ListadoProductos extends Component {
constructor(props){
  super(props)

  //nos creamos un objeto productos que ahora estará vacío
  this.state={productos:undefined, isLoading: true, search: '', estado: true}
  this.arrayholder = [];
}


  //Obtener productos

componentDidMount(){
  return fetch("http://localhost:3000/elements")
    .then((response)=> response.json())
     .then(responseJson => {
            this.setState(
              {
                isLoading: false,
                dataSource: responseJson,
              },
              function() {
                this.arrayholder = responseJson;
              }
            );
          })
    .catch((error)=> Console.log(error))
}

//componentDidUpdate(){
//return fetch("http://localhost:3000/elements")
//    .then((response)=> response.json())
//     .then(responseJson => {
//            this.setState(
//              {
//                isLoading: false,
//                dataSource: responseJson,
//              },
//              function() {
//                this.arrayholder = responseJson;
//              }
//            );
//          })
//    .catch((error)=> Console.log(error))
//}


search = text => {
    console.log(text);
  };
clear = () => {
this.search.clear();
};



SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar

      if (!estado) {
            const itemData = item.id ? item.nom.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
      }else {

            const itemData = item.id ? item.autor.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
      }

    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search:text,
    });
  }

  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };

 render(){

     if (this.state.isLoading) {
       //Loading View while data is loading
       return (
         <View style={{ flex: 1, paddingTop: 20 }}>
           <ActivityIndicator />
         </View>
       );
     }

  return (
   <View style={{backgroundColor:"white"}}>
        <SearchBar
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder="Type Here..."
          value={this.state.search}
          />

          <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
           <View style={styles.textStyle}>
               <Text>Título: {item.nom}</Text>
               <Text>Autor: {item.autor}</Text>
               <Text>Temática: {item.tematica}</Text>
               <Text>Nº Páginas: {item.paginas}</Text>
           </View>

          )}

          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />


     </View>
  );
};
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor:'white',
    marginTop: Platform.OS == 'ios'? 30 : 0
  },
  textStyle: {
    padding: 10,
  },
});

//en el Boton de Modificar haremos uso del prop que le hemos pasado por la pantalla de Inici y la variable i obtendrá todo el item concreto del flatList 

