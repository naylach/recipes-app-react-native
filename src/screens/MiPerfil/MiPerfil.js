import React, { useContext, useState } from 'react';
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
import { DataContext } from '../../context';

export default function MiPerfil(props) {

  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] =  useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [documento, setDocumento] = useState("");
  const { currentUser, setCurrentUser, url } = useContext(DataContext);
    const handleButtonClick = (e) => {
      const usuario = {
        nombre, categoria, direccion, email, documento
      };
  
      // fetch("http://localhost:8000/api/cliente/", {
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
        
        props.navigation.navigate('MiPerfil');
    };
    return (
      <ScrollView style={styles.mainContainer}>
        {currentUser && <View>
          <Image style={styles.image} source={require('../../../assets/icons/selfie.jpeg')}/>
          <Text style={styles.title}>Nombre y apellido</Text>
          <TextInput style={styles.input} onChangeText={text => setNombre(text)} value={nombre} placeholder={currentUser.nombre} placeholderTextColor="black"></TextInput>
          <Text style={styles.title}>Categoría</Text>
          <TextInput style={styles.input} editable={false} value={categoria} placeholder={currentUser.categoria}></TextInput>
          <Text style={styles.title}>Dirección</Text>
          <TextInput style={styles.input} onChangeText={text => setDireccion(text)} value={direccion} placeholder={currentUser.direccion} placeholderTextColor="black"></TextInput>
          <Text style={styles.title}>Email</Text>
          <TextInput style={styles.input} onChangeText={text => setEmail(text)} value={email} placeholder={currentUser.email} placeholderTextColor="black"></TextInput>
          <Text style={styles.title}>DNI</Text>
          <TextInput style={styles.input} editable={false} value={documento} placeholder={currentUser.documento}></TextInput>
            <Button 
              style={styles.buttonLogin} 
              title='Guardar cambios'
              onPress={handleButtonClick}
            >
              <Image style={styles.editIcon} source={require('../../../assets/icons/edit.png')}></Image>
              </Button>
        </View>}
        {!currentUser &&<Button 
            style={styles.buttonLogin} 
            title='Iniciar sesión'
            onPress={props.navigation.navigate('Login')}
          />}
      </ScrollView>
    );
}