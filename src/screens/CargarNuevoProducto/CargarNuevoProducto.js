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
      tipo: "",
      descripcion: "",
      imagenes: [],
      artista: "",
      fecha: "",
      contexto: "",
      duenio: "",
      curiosidades: ""
    };
  }

  render() {
    const { navigation } = this.props;
    const handleButtonClick = (e) => {
      let descripcion = (this.state.tipo !== 'Arte' && this.state.tipo !== 'Objetos de diseñador') ? this.state.descripcion : this.state.artista + this.state.disenador + this.state.fecha + this.state.contexto + this.state.duenio + this.state.curiosidades;
      const nuevoProducto = {
        nombre, tipoProducto, descripcion, imagenes
      };
        
        navigation.navigate('Home');
    };
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={{flex:1, justifyContent:'space-around'}}>
            
        <Text style={styles.title}>Nombre del producto:</Text>
        <TextInput style={styles.input} onChangeText={text => this.setState({nombre: text})} value={this.state.nombre} />
        <Text style={styles.title}>Tipo de producto:</Text>

        <ModalSelector
          data={tipoProducto}
          style={styles.modalSelector}
          initValue="Seleccionar"
          margin="50"
          type='solid'
          key={this.state.tipo}
          onChangeText={(text) => this.setState({tipo: text})}
        />  
           
        <Text style={styles.title}>Descripción:</Text>
        <TextInput style={styles.description} onChangeText={text => this.setState({descripcion: text})} value={this.state.descripcion} />

        { (this.state.tipo === 'Arte' || this.state.tipo === 'Objetos de diseñador') &&
        (<>
          <Text style={styles.title}>Artista/Diseñador:</Text>
          
          <TextInput style={styles.input} onChangeText={text => this.setState({artista: text})} value={this.state.artista} />
          
          <Text style={styles.title}>Fecha:</Text>
          
          <TextInput style={styles.input} onChangeText={text => this.setState({fecha: text})} value={this.state.fecha} />
          
          <Text style={styles.title}>Contexto:</Text>
          
          <TextInput style={styles.input} onChangeText={text => this.setState({contexto: text})} value={this.state.contexto} />
          
          <Text style={styles.title}>Dueño anterior:</Text>
          
          <TextInput style={styles.input} onChangeText={text => this.setState({duenio: text})} value={this.state.duenio} />
          
          <Text style={styles.title}>Curiosidades:</Text>
          
          <TextInput style={styles.description} onChangeText={text => this.setState({curiosidades: text})} value={this.state.curiosidades} />
        </>)}

        <Text style={styles.title}>Imagenes:</Text>
        <Button
          title= '+'
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



