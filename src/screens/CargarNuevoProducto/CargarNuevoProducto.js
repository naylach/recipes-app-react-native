import React from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import { Button } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';
import ModalSelector from 'react-native-modal-selector';
import * as ImagePicker from "expo-image-picker";
import {tipoProducto} from '../../data/dataArrays';


import styles from './styles';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
};

const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.cancelled) {
    setImage(result.uri);
  }
};



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
        
        navigation.navigate('Home');
    };
    return (
      <ScrollView style={styles.mainContainer}>
        <View>
            
            <Text style={styles.title}>Nombre del producto:</Text>
            <TextInput style={styles.input} onChangeText={this.setState(nombre)} value={nombre} ></TextInput>
            <Text style={styles.title}>Tipo de producto:</Text>
           
            <View style={{flex:1, justifyContent:'space-around'}}>

            <ModalSelector
              data={tipoProducto}
              style={styles.modalSelector   }
              initValue="Seleccionar"
              margin="50"
              type='solid'
              // onChange={(option) => {
              //   alert(`${option.label} (${option.key})`);
              // }}
            />  




        </View>

            <Text style={styles.title}>Precio base:</Text>
            <TextInput style={styles.input} onChangeText={this.setState(precioBase)} value={precioBase} >$ </TextInput>
            <Text style={styles.title}>Descripción:</Text>
            <TextInput style={styles.description} onChangeText={this.setState(marca)} value={marca} >  </TextInput>

            <Button
              title= 'Adjuntar imagen'
              style={styles.btnimage}
              onPress={pickImage}
              color="#9FCAF5"
            />
            
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



