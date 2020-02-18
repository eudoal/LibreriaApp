import 'react-native-gesture-handler';
import FontAwesome from 'react-fontawesome';
import React, { Component } from 'react';
import {StyleSheet,ScrollView,View,Text,Button,FlatList,ActivityIndicator, Platform} from 'react-native';
import { SearchBar} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import { NavigationEvents } from 'react-navigation';

const tematicas = [
  {
    label: 'Bucar por Título del libro',
    value: 'nom',
  },
  {
    label: 'Bucar por Autor del libro',
    value: 'autor',
  },
  {
    label: 'Bucar por Temática del libro',
    value: 'tematica',
  },
  {
    label: 'Bucar por nº de Páginas del libro',
    value: 'paginas',
  },
];

export default class ListadoProductos extends Component {
  constructor(props) {
    super(props)

    //nos creamos un objeto productos que ahora estará vacío
    this.state = { productos: undefined, isLoading: true, search: '', tematica: 'nom' }
    this.arrayholder = [];
  }


  //Obtener productos
  update() {
    return fetch("http://localhost:3000/elements")
      .then((response) => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function () {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch((error) => Console.log(error))
  }

  componentDidMount() {
    this.update()
  }

  search = text => {
    console.log(text);
  };
  clear = () => {
    this.search.clear();
  };

  SearchFilterFunction(text) {
    const tematica = this.state.tematica
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function (item) {
      //applying filter for the inserted text in search bar

      if (tematica == 'nom') {
        const itemData = item.id ? item.nom.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      } else if (tematica == 'autor') {

        const itemData = item.id ? item.autor.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      } else if (tematica == 'tematica') {

        const itemData = item.id ? item.tematica.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      } else if (tematica == 'paginas') {

        const itemData = item.id ? item.paginas.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      }

    });
    this.setState({

      dataSource: newData,
      search: text,
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

  render() {

    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ backgroundColor: "white", paddingTop: 5, paddingBottom: 5 }}>
        <SearchBar
          lightTheme
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Busca ..."
          value={this.state.search}
        />
        <NavigationEvents
          onWillFocus={() => this.update()}
        />

        <View >
          <RNPickerSelect
            placeholder={{}}
            items={tematicas}
            onValueChange={value => {
              this.setState({
                tematica: value,
              });
            }}
            InputAccessoryView={() => null}
            style={pickerSelectStyles}
            value={this.state.tematica}
          />
        </View>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          //Item Separator View
          renderItem={({ item }) => (
            // Single Comes here which will be repeatative for the FlatListItems
            <View style={styles.textStyle}>
              <View style={{ marginLeft: 30, }}>
                <Text style={{ fontWeight: 'bold', }}>Título: {item.nom}</Text>
                <Text style={{ fontWeight: 'bold', }}>Autor: {item.autor}</Text>
                <Text style={{ fontWeight: 'bold', }}>Temática: {item.tematica}</Text>
                <Text style={{ fontWeight: 'bold', }}>Nº Páginas: {item.paginas}</Text>
              </View>
              <View style={styles.container}>
                <View style={styles.buttonContainer}>
                  <Button title={"Añadir Detalles"}
                    color="#505050"
                    onPress={() => this.props.mover({ i: item })}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <Button title={"Eliminar"}
                    color="red"
                    onPress={() => {
                      alert("El libro '" + item.nom + "' se ha sido ELIMINADO!!!");
                      fetch('http://localhost:3000/elements/' + item.id, {
                        method: 'DELETE',
                      })
                        .then(res => res.text())
                        .then(res => console.log(res))
                        this.update();
                    }
                    }
                  />
                </View>
              </View>
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
    backgroundColor: 'white',
    marginTop: Platform.OS == 'ios' ? 30 : 0
  },
  textStyle: {
    padding: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    padding: 10,

  },
});

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, 
  },
});

