import React, { Component } from 'react';
import {StyleSheet,Text,View,TextInput,Button,TouchableHighlight,Image} from 'react-native';
import 'react-native-gesture-handler';
export default class LoginViewComponent extends Component {

  constructor(props) {
    super(props);

    //creamos el estado donde se guardarán los datos. 
    this.state = {
      email: '',
      contrasenya: '',
      documentJSON: [],///Aquí se guardan los usuarios recuperados de la bbdd
    }
   this.comprobarUsuario = this.comprobarUsuario.bind(this);
   this.usuarioCorrecto = this.usuarioCorrecto.bind(this);

  } 


  //Recupera SOLO los usuarios que coincidan con las variables pasadas por parámetros   
  comprobarUsuario() {
    //cada vez que comprobemos el usuario, el documentJson será vaciado a través del setState por precaución 
    this.setState({documentJSON: []})
    //este fecth nos permite comprobar si el usuario existe pasandole el email y la contraseña
    fetch('http://localhost:3000/usuaris?userName='+this.state.email + '&contrasenya='+this.state.contrasenya) 
      .then((respuesta) => {
        if (respuesta.ok) {
       
          return respuesta.json();
        } else {
          console.log("Error en la conexion con http://localhost:3000/usuaris/")
          alert("Error en la conexion con http://localhost:3000/usuaris/")
        }
      })
      .then(respostaJson => {
        //asignamos la respuesta al documentJson
        this.setState({ documentJSON: respostaJson })

        //llamos a la función usuario correcto para finalizar la llamada
        this.usuarioCorrecto();
      })
      .catch(error => {
        console.log("Error de conexion: " + error);
        
      });
      

  }
      
usuarioCorrecto(){
      if(this.state.documentJSON.length == 0){
          alert("El usuario no existe");
      }else if(this.state.documentJSON.length != 0 ){
          this.props.inici({n:this.state.email}) 
      }     
  }

  //función para guardar el email pasado por parámetro
  guardarEmail=(email)=>{
    this.setState({email:email})
  }
  //función para guardar el password pasado por parámetro
  guardarContrasenya=(contrasenya)=>{
    this.setState({contrasenya:contrasenya})
  }


render() {
  return (
    <View style={styles.container}>
      <View>
      <Image source={require('../images/logoLogin.png')} style={{width: 220, height: 220, marginLeft:60 }} />
        <Text style={{ fontSize: 50, color: '#B4923A', fontWeight: 'bold', padding: 10 }}>BIENVENIDOS</Text>
      </View>
      <View style={styles.inputContainer}>
      <TextInput style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid='transparent'
          onChangeText={this.guardarEmail} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputs}
          placeholder="Contraseña"
          secureTextEntry={true}
          underlineColorAndroid='transparent'
          onChangeText={this.guardarContrasenya} />
      </View>
      <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.comprobarUsuario}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.buttonContainer} onPress={this.props.registro}>
        <Text>Registrarse</Text>
      </TouchableHighlight>
    </View>
     );
    } 
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
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
  loginButton: {
    backgroundColor: "#505050",
  },
  loginText: {
    color: 'white',
  },
  titulo: {
    backgroundColor: "#00b5ec",
    fontSize: 20,
    fontWeight: 'bold',
    width: 375,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 40
  }
});