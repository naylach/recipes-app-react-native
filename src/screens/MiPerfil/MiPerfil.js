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
import { users } from '../../data/dataArrays.js'

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
            <TextInput style={styles.input} onChangeText={text => this.setState({nombre: text})} value={nombre} >{`${users[0].nombre} ${users[0].apellido}`}</TextInput>
            <Text style={styles.title}>Categoría</Text>
            <TextInput style={styles.input} editable='false' value={categoria} >{users[0].categoria}</TextInput>
            <Text style={styles.title}>Teléfono</Text>
            <TextInput style={styles.input} onChangeText={text => this.setState({telefono: text})} value={telefono} >{users[0].telefono}</TextInput>
            <Text style={styles.title}>Email</Text>
            <TextInput style={styles.input} onChangeText={text => this.setState({email: text})} value={email} >{users[0].email}</TextInput>
            <Text style={styles.title}>DNI</Text>
            <TextInput style={styles.input} editable='false' value={dni} >{users[0].dni}</TextInput>
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
