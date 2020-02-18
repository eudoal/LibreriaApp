import React, {Component} from 'react';
import {StyleSheet,View,Text,Button,Alert,TextInput} from 'react-native';
import 'react-native-gesture-handler';


export default class ModificarAñadir extends Component{
    constructor(props){
        super(props);
        //creamos el state con las propiedades que necesitamos
        this.state={
            id:"",
            nom:"",
            autor:"",
        }
    }
    componentDidMount(){
      if(this.props.producto != ""){
        this.setState({nom:this.props.producto.nom})
        this.setState({autor:this.props.producto.autor})
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
 
        alert += "Pon el autor \n"
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
            autor:this.state.autor
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
                console.log("Error al hacer el PUT")
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
            <TextInput onChangeText={(text) => this.setState({nom: text})} placeholder={"Título del Libro"} style={styles.title} keyboardType={"default"} value={this.state.nom}/>

            <TextInput onChangeText={(text) => this.setState({autor: text})} placeholder={"Autor del Libro"}
            style={styles.title} keyboardType={"default"} value={this.state.autor}/>
            <View style={{borderBottomColor:'black',borderBottomWidth:1}}>
              <Button color='#B59345' style={styles.buttonContainer} title="Añadir" onPress={this.funciona}/>
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