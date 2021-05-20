import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';

export default class MiPerfil extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Mi Perfil'
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      categoria: "",
      telefono: "",
      email: "",
      dni: ""
    };
  }

  render() {
    const { navigation } = this.props;
    let nombre, categoria, telefono, email, dni;
    const handleButtonClick = (e) => {
      const usuario = {
        nombre, categoria, telefono, email, dni
      };
  
      // fetch("http://localhost:8000/api/producto/", {
      //   method: "PUT",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(usuario),
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log("Success:", data);
      //   })
      //   .catch((error) => {
      //     console.error("Error:", error);
      //   });
        
        navigation.navigate('MiPerfil');
    };
    return (
      <ScrollView style={styles.mainContainer}>
        <View>
            <Image style={styles.image} source={require('../../../assets/icons/selfie.jpeg')}/>
            <Text style={styles.title}>Nombre y apellido</Text>
            <TextInput style={styles.input} onChangeText={this.setState(nombre)} value={nombre} >Cristina Cañizales</TextInput>
            <Text style={styles.title}>Categoría</Text>
            <TextInput style={styles.input} editable='false' value={categoria} >Diamante</TextInput>
            <Text style={styles.title}>Teléfono</Text>
            <TextInput style={styles.input} onChangeText={this.setState(telefono)} value={telefono} >1126704760</TextInput>
            <Text style={styles.title}>Email</Text>
            <TextInput style={styles.input} onChangeText={this.setState(email)} value={email} >ccanizales@uade.edu.ar</TextInput>
            <Text style={styles.title}>DNI</Text>
            <TextInput style={styles.input} editable='false' value={dni} >95.773.254</TextInput>
            <Button 
              style={styles.buttonLogin} 
              title='Guardar cambios'
              onPress={handleButtonClick}
            >
              <Image style={styles.editIcon} source={require('../../../assets/icons/edit.png')}></Image>
              </Button>
        </View>
      </ScrollView>
    );
  }
}
