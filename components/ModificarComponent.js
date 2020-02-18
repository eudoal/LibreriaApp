import React, {Component} from 'react';
import {StyleSheet,View,Text,Button,Alert,TextInput} from 'react-native';
import 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';

const tematicas = [
    {
    label: 'Novela negra',
    value: 'Novela negra',
    },
    {
      label: 'Novela histórica',
      value: 'Novela histórica',
    },
    {
      label: 'Terror',
      value: 'Terror',
    },
    {
      label: 'Ciencia ficción',
      value: 'Ciencia ficción',
    },
    {
      label: 'Fantasía',
      value: 'Fantasía',
    }
];

export default class ModificarExtras extends Component{
    constructor(props){
        super(props);
        //creamos el state con las propiedades que necesitamos

        this.state={
            id:"",
            nom:"",
            autor:"",
            tematica:"",
            paginas:"",


        }
    }

     componentDidMount(){
      if(this.props.producto != ""){
        this.setState({nom:this.props.producto.nom})
        this.setState({autor:this.props.producto.autor})
        this.setState({tematica:this.props.producto.tematica})
        this.setState({paginas:this.props.producto.paginas})
        this.setState({id:this.props.producto.id})
      }
    }

    funciona = () => {
      var alert = ""

      if(this.state.nom == ""){

        alert += "Pon el Nombre \n"
      }

      if(this.state.autor == ""){

        alert += "Pon la autorn \n"
      }
     if(alert != "" ){
        Alert.alert("Te falta poner: ",alert);
      }
      else{
        if(this.props.producto == ""){
          fetch('http://localhost:3000/elements', {
            method: 'POST',
            headers: {

              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id:"",
              nom:this.state.nom,
              autor:this.state.autor,
              tematica:this.state.tematica,
              paginas:this.state.paginas,
            })
          })
          Alert.alert("Se ha añadido a: ", this.state.nom)
            this.setState({
             id:"",
             nom:"",
             autor:"",
             tematica:"",
             paginas:"",
            });
        }
        else{
          let x={
            id:this.state.id,
            nom:this.state.nom,
            autor:this.state.autor,
              tematica:this.state.tematica,
              paginas:this.state.paginas
          }
          fetch('http://localhost:3000/elements/'+ x.id, {
            method: 'PUT',
            body: JSON.stringify(x),
            headers: {
              'Content-Type': 'application/json; charset=UTF-8'
            }
          })
            .then((resposta) => {
              if (resposta.ok) {
                return resposta.json();
              } else {
                console.log("Error en el PUT")
              }
            })
            .then(respostaJson => {
              console.log(respostaJson);
              Alert.alert("Libro actualizado correctamente");
            })
            .catch(error => {
              console.log("Error de red: " + error);
            })
        }
      }
    }
    render(){
      return(
        <View style={styles.posicion}>
            <View>
              <Text>{this.props.text}</Text>
            </View>
            <View >
            <TextInput onChangeText={(text) => this.setState({nom: text})} placeholder={"Pon el nombre del Libro"}
            style={styles.title} keyboardType={"default"} value={this.state.nom}/>

            <TextInput onChangeText={(text) => this.setState({autor: text})} placeholder={"Pon la autor del Libro"}
            style={styles.title} keyboardType={"default"} value={this.state.autor}/>

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
            <TextInput onChangeText={(text) => this.setState({paginas: text})} placeholder={"Pon la cantidad de paginas"}
            style={styles.title} keyboardType={"default"} value={this.state.paginas}/>
            <View style={{borderBottomColor:'black',borderBottomWidth:1}}>
              <Button color='#B4923A' title="Actualizar" onPress={this.funciona}/>
            </View>
            </View>
        </View>
      )
    }

  }
  const styles = StyleSheet.create({
    container: {
      borderRadius: 3,
      borderWidth: 0.3,
      borderColor: '#d6d7da',
    },
    buttonContainer: {
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      width: 250,
      borderRadius: 30,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      borderColor:"black",
      borderWidth:2,
      marginBottom:5
    },
    titledni:{
      fontSize: 20,
      fontWeight: 'bold',
      borderColor:"black",
      borderWidth:5,
      
    },
    posicion:{
      padding:15,

    },
    activeTitle: {
      color: 'red',
    },
    borde:{

    }
  });

  const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
      fontSize: 20,
      fontWeight:'bold',
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
     
    },
  });