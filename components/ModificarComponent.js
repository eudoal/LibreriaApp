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

    //SI NO ESTÁ VACÍO, VAMOS A AÑADIR
    //dependiendo desde dónde entramos, ya sea modificar o añadir el prop de producto será diferente. Si es añadir estará
    // vacío y si es
    //modificar se le aplicarán los valores del estado con los valores del prop producto (significa que está rellenado)
    componentDidMount(){
      if(this.props.producto != ""){
        this.setState({nom:this.props.producto.nom})
        this.setState({autor:this.props.producto.autor})
        this.setState({tematica:this.props.producto.tematica})
        this.setState({paginas:this.props.producto.paginas})
        this.setState({id:this.props.producto.id})
      }
    }

    //comprobamos que todo está rellenado
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
      //dependiendo de si el prop.producto está lleno o vacío se detectará de si se quiere añadir o modificar. VACÍO=AÑADIR / LLENO=MODIFICAR
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

            <TextInput onChangeText={(text) => this.setState({tematica: text})} placeholder={"Pon la temática del libro"}
            style={styles.title} keyboardType={"default"} value={this.state.tematica}/>

            <TextInput onChangeText={(text) => this.setState({paginas: text})} placeholder={"Pon la cantidad de paginas"}
            style={styles.title} keyboardType={"default"} value={this.state.paginas}/>



            <View style={{borderBottomColor:'black',borderBottomWidth:1}}>
              <Button color='green' title="Actualizar" onPress={this.funciona}/>
            </View>
            <View>
              <Button color='green' title="Volver" onPress={()=>this.props.inici()} />
            </View>
            </View>
        </View>


      )
    }

  }

  //con el botón Cancelar llamamos a la función que le hemos pasado desde Añadir/Modificar para volver al inici si queremos cancelar el proceso




  const styles = StyleSheet.create({
    container: {
      borderRadius: 3,
      borderWidth: 0.3,
      borderColor: '#d6d7da',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      borderColor:"black",
      borderWidth:2,

    },
    titledni:{
      fontSize: 20,
      fontWeight: 'bold',
      borderColor:"black",
      borderWidth:5
    },
    posicion:{
      alignItems: "center"

         },
         activeTitle: {
           color: 'red',
         },
         borde:{

         }
       });