import React, { useContext, useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';
import { users } from '../../data/dataArrays.js'
import { DataContext } from '../../context';
import mime from "mime"
import * as ImagePicker from "expo-image-picker";

export default function MiPerfil(props) {

  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] =  useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [documento, setDocumento] = useState("");
  const [imagen,setImagen]= useState("")
  const { currentUser, setCurrentUser, url } = useContext(DataContext);
  
    const handleButtonClick = (e) => {
      if(Object.keys(currentUser).length!=0){
          const usuario = {
            idUsuario: currentUser.idUsuario, 
            nombre: nombre || currentUser.nombre, 
            direccion: direccion || currentUser.direccion, 
            email: email || currentUser.email, 
            documento: documento || currentUser.documento,
            imagen: imagen || currentUser.imagen
          };
    
          fetch(url+"auth/update", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("=== Se actualizaron los datos correctamente ===\nEl nuevo current user tiene estos datos:");
              console.log(JSON.stringify(data,null,2))
              setCurrentUser(data.result);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
            
            props.navigation.navigate('MiPerfil');
        }else{
          alert("Necesitas loguearte para actualizar tus datos")
        }
      
    };
    const handleProfilePicClick = async () =>{
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
        maxWidth: 800,
        maxHeight:600,
      });
  
      if (!result.cancelled) {
        imageUploader(result.uri)
      }
    }
    async function imageUploader(files){
      const newUri = "file://" + files.split("file:/").join("")
      let photo ={
        uri: newUri,
        type: mime.getType(newUri),
        name: newUri.split("/").pop()
      }
      const formData = new FormData()
      formData.append("file",photo)
      formData.append('upload_preset','dhnd6bdt')
      formData.append('resource_type','image')
     fetch("https://api.cloudinary.com/v1_1/subastapp/image/upload",{
        headers: {
          'content-type': 'application/form-data'
        },
        method:'POST',
        body: formData
      })
        .then((response) =>response.json())
        .then(data=>{
            setImagen(data.url)
        })
  
  
    }
    return (
      <ScrollView style={styles.mainContainer}>
        {currentUser && <View>
          <TouchableHighlight onPress={handleProfilePicClick}>
          <Image style={styles.image}  source={{uri: currentUser.imagen ||"https://res.cloudinary.com/subastapp/image/upload/v1625020519/emptyprofilepic.jpg"}}/>
          </TouchableHighlight>
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