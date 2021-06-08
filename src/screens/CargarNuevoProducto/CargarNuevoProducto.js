import React, { useState } from 'react';
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

export default function CargarNuevoProducto (props) {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [artista, setArtista] = useState("");
  const [fecha, setFecha] = useState("");
  const [contexto, setContexto] = useState("");
  const [duenio, setDuenio] = useState("");
  const [curiosidades, setCuriosidades] = useState("");
  const [disenador, setDisenador] = useState("");
 
  const handleButtonClick = (e) => {
      let descr = (tipo !== 'Arte' && tipo !== 'Objetos de diseñador') ? descripcion : artista + disenador + fecha + contexto + duenio + curiosidades;
      const nuevoProducto = {
        nombre, tipoProducto, descr, imagenes
      };
        
        props.navigation.navigate('Home');
    };
    
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={{flex:1, justifyContent:'space-around'}}>
          
      <Text style={styles.title}>Nombre del producto:</Text>
      <TextInput style={styles.input} onChangeText={text => setNombre(text)} value={nombre} />
      <Text style={styles.title}>Tipo de producto:</Text>

      <ModalSelector
        data={tipoProducto}
        style={styles.modalSelector}
        initValue="Seleccionar"
        margin="50"
        type='solid'
        key={tipo}
        onChangeText={text => setTipo(text)}
      />  
          
      <Text style={styles.title}>Descripción:</Text>
      <TextInput style={styles.description} onChangeText={text => setDescripcion(text)} value={descripcion} />

      { (tipo === 'Arte' || tipo === 'Objetos de diseñador') &&
      (<>
        <Text style={styles.title}>Artista/Diseñador:</Text>
        
        <TextInput style={styles.input} onChangeText={text => setArtista(text)} value={artista} />
        
        <Text style={styles.title}>Fecha:</Text>
        
        <TextInput style={styles.input} onChangeText={text => setFecha(texto)} value={fecha} />
        
        <Text style={styles.title}>Contexto:</Text>
        
        <TextInput style={styles.input} onChangeText={text => setContexto(text)} value={contexto} />
        
        <Text style={styles.title}>Dueño anterior:</Text>
        
        <TextInput style={styles.input} onChangeText={text => setDuenio(text)} value={duenio} />
        
        <Text style={styles.title}>Curiosidades:</Text>
        
        <TextInput style={styles.description} onChangeText={text => setCuriosidades(text)} value={curiosidades} />
      </>)}

      <Text style={styles.title}>Imagenes:</Text>
      <Button
        title= '+'
        style={styles.btnimage}
        onPress={pickImage()}
        color="#9FCAF5"
      />
      
      <Button
        title='Aceptar'
        style={styles.buttonLogin}      
        onPress={handleButtonClick()}
      />

      </View>
    </ScrollView>
  );
}