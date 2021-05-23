import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import { Button } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';


import styles from './styles';

export default class CargarNuevoProducto extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Cargar nuevo producto'
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      categoria: "",
      precioBase: "",
      marca: "",
      modelo: "",
      estado: "",
      otros: ""
    };
  }

  render() {
    const { navigation } = this.props;
    let nombre, categoria, precioBase, marca, modelo, estado, otros;
    const handleButtonClick = (e) => {
      const nuevoProducto = {
        nombre, categoria, precioBase, marca, modelo, estado, otros
      };
  
      // fetch("http://localhost:8000/api/producto/", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(nuevoProducto),
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log("Success:", data);
      //   })
      //   .catch((error) => {
      //     console.error("Error:", error);
      //   });
        
        navigation.navigate('Home');
    };
    return (
      <ScrollView style={styles.mainContainer}>
        <View>
            
            <Text style={styles.title}>Nombre del producto:</Text>
            <TextInput style={styles.input} onChangeText={this.setState(nombre)} value={nombre} ></TextInput>
            <Text style={styles.title}>Tipo de producto:</Text>
            <TextInput style={styles.input} onChangeText={this.setState(categoria)} value={categoria} ></TextInput>           
            <Text style={styles.title}>Imagen  </Text>            
            <Image source={{ uri: 'https://static.thenounproject.com/png/1156518-200.png' }}style={styles.image}/>
            <Text style={styles.title}>Precio base:</Text>
            <TextInput style={styles.input} onChangeText={this.setState(precioBase)} value={precioBase} > </TextInput>
            <Text style={styles.title}>Descripción:</Text>
            <TextInput style={styles.description} onChangeText={this.setState(marca)} value={marca} >  </TextInput>
  
            <Button
              title='Aceptar'
              style={styles.buttonLogin}      
              onPress={handleButtonClick}
            />

        </View>
      </ScrollView>
    );
  }
}



