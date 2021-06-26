import React, { useContext, useState } from 'react';

import {
  Modal,
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
import { DataContext } from '../../context';
import mime from "mime"


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
 
  const [modalSuccessVisible, setModalSuccessVisible] = useState(false);
  const {url,currentUser} =useContext(DataContext)

  const checkTextInput = (e) => {
     if (!nombre.trim()) {
       alert("Por favor, ingrese nombre del producto");
       return;
     }
     if (!descripcion.trim()) {
       alert("Por favor, ingrese descripcion del producto");
       return;
     }
     /*if (!tipo.trim()) {
       alert("Por favor, seleciones tipo de producto");
       return;
     }*/
    
    handleButtonClick();
  };
  async function imageUploader(files){
    
    
    const newUri = "file://" + files.split("file:/").join("")
    console.log(newUri,mime.getType(newUri))
    let photo ={
      uri: newUri,
      type: mime.getType(newUri),
      name: newUri.split("/").pop()
    }
    const formData = new FormData()
    formData.append("file",photo)
    formData.append('upload_preset','dhnd6bdt')
    formData.append('resource_type','image')
    console.log(formData)
    fetch("https://api.cloudinary.com/v1_1/subastapp/image/upload",{
      headers: {
        'content-type': 'application/form-data'
      },
      method:'POST',
      body: formData
    })
      .then((response) =>response.json())
      .then(data=>{
          console.log("===>"+JSON.stringify(data))
          setImagenes([data.url])
      })


  }

  function handleButtonClick () {
    console.log(imagenes)
    const descr =
      tipo != "Arte" && tipo != "Objetos de diseñador"
        ? descripcion
        : artista + disenador + fecha + contexto + duenio + curiosidades;
    const nuevoProducto = {
      descripcionCatalogo: nombre,
      tipo: tipo,
      descripcionCompleta: descr,
      foto: imagenes,
      duenio: currentUser?.idCliente || 9000
    };
    const user ={
      "idCliente": 9000,
      "idUsuario": "31619",
      "email": "augusto@a.es",
      "password": "$2b$05$aQOxju6Pz7l3y5FxsHmjAexJFPLt.WUbvJRUfzFN4q8qEUVsLtoMm",
      "categoria": "comun",
      "verificador": null,
      "documento": "789456126",
      "nombre": "cris cañizales",
      "direccion": "santa fe 3000",
      "estado": 2,
      "imagen": ""
    };
    //console.log(nuevoProducto,currentUser)
    const data = currentUser? Object.assign(nuevoProducto,user): nuevoProducto 
    fetch(url+"productos", {
    
      method: "POST",
      headers: {
        "Content-Type": 'application/json; charset=UTF-8',
      },

      body: JSON.stringify({...nuevoProducto}),
    })
    .then((response) => {
      //console.log(response.status+": "+JSON.stringify(response))
      return response.json()})
    .then(data=>{
        console.log("cargue el producto!"+JSON.stringify(data))
        setModalSuccessVisible(true);
    })
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
      maxWidth: 800,
      maxHeight:600,
    });

    if (!result.cancelled) {
      console.log(result.uri)
      imageUploader(result.uri)
    }
  };
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={{ flex: 1, justifyContent: "space-around" }}>
        <Text style={styles.title}>Nombre del producto:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNombre(text)}
          value={nombre}
        />
        <Text style={styles.title}>Tipo de producto:</Text>

        <ModalSelector
          data={tipoProducto}
          style={styles.modalSelector}
          initValue="Seleccionar"
          margin="50"
          type="solid"
          key={tipo}
          onChange={ (texto)=>{setTipo(texto.label)}}
        />

        <Text style={styles.title}>Descripción:</Text>
        <TextInput
          style={styles.description}
          onChangeText={(text) => setDescripcion(text)}
          value={descripcion}
        />

        {(tipo === "Arte" || tipo === "Objetos de diseñador") && (
          <>
            <Text style={styles.title}>Artista/Diseñador:</Text>

            <TextInput
              style={styles.input}
              onChangeText={(text) => setArtista(text)}
              value={artista}
            />

            <Text style={styles.title}>Fecha:</Text>

            <TextInput
              style={styles.input}
              onChangeText={(text) => setFecha(text)}
              value={fecha}
            />

            <Text style={styles.title}>Contexto:</Text>

            <TextInput
              style={styles.input}
              onChangeText={(text) => setContexto(text)}
              value={contexto}
            />

            <Text style={styles.title}>Dueño anterior:</Text>

            <TextInput
              style={styles.input}
              onChangeText={(text) => setDuenio(text)}
              value={duenio}
            />

            <Text style={styles.title}>Curiosidades:</Text>

            <TextInput
              style={styles.description}
              onChangeText={(text) => setCuriosidades(text)}
              value={curiosidades}
            />
          </>
        )}

        <Text style={styles.title}>Imagenes:</Text>
        <Button
          title="+"
          style={styles.btnimage}
          onPress={pickImage}
          color="#9FCAF5"
        />

        <Button
          title="Aceptar"
          style={styles.buttonLogin}
          onPress={checkTextInput}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalSuccessVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalSuccessVisible(!modalSuccessVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>
              {" "}
              ¡Felicitaciones! Su producto está en revisión{" "}
            </Text>
            <View style={styles.columns}>
              <Image
                style={styles.imageModal}
                source={require("../../../assets/icons/check.png")}
              />

              <Button
                title="Aceptar"
                color="#06d755"
                onPress={() =>  {
                  setModalSuccessVisible(false);
                  //props.navigation.navigate("Home")
                }}
              ></Button>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}