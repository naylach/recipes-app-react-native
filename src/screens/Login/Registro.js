import React, { useState, useEffect, useContext } from 'react';
import { Button } from 'react-native-elements'
import {
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';
import Modal from "react-native-simple-modal";
import { DataContext } from "../../context";

export default function Registro(props) {
  const [ nombre, setNombre ] = useState("");
  const [ apellido, setApellido ] = useState("");
  const [ documento, setDNI ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ email2, setEmail2 ] = useState("");
  const [ telefono, setTelefono ] = useState("");
  const [ direccion, setDireccion ] = useState("");
  const [ visibilityModal, setVisibilityModal ] = useState(false);
  const { url } = useContext(DataContext);

  const openModal = () => setVisibilityModal(true);

  const closeModal = () => {
    setVisibilityModal(false);
    props.navigation.navigate('Home');
  };

  const handleButtonClick = () => {
    const nuevoUsuario = {
      nombre: nombre + " " + apellido,
      documento,
      telefono,
      email,
      direccion
    };
    console.log("Nuevo usuario: ", JSON.stringify(nuevoUsuario));

    fetch(url + "auth/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoUsuario),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // var details = {
    //   destinatario: email,
    //   asunto: "Registro en SubastApp para el usuario: " + nombre + " " + apellido,
    // };
    // var formBody = [];
    // for (var property in details) {
    //   var encodedKey = encodeURIComponent(property);
    //   var encodedValue = encodeURIComponent(details[property]);
    //   formBody.push(encodedKey + "=" + encodedValue);
    // }
    // formBody = formBody.join("&");
    // fetch("http://localhost:8080/api/sendEmail", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    //   },
    //   body: formBody,
    // });
    openModal();
  };
    return (
      <ScrollView style={styles.mainContainer} scrollEnabled='false'>
        <View>
            <Text style={styles.titleRegisterScreen}>Nombre</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => setNombre(text)} value={nombre}></TextInput>
            <Text style={styles.titleRegisterScreen}>Apellido</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => setApellido(text)} value={apellido}></TextInput>
            <Text style={styles.titleRegisterScreen}>DNI</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => setDNI(text)} value={documento}></TextInput>
            <Text style={styles.titleRegisterScreen}>Teléfono</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => setTelefono(text)} value={telefono}></TextInput>
            <Text style={styles.titleRegisterScreen}>Dirección</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => setDireccion(text)} value={direccion}></TextInput>
            <Text style={styles.titleRegisterScreen}>Email</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => setEmail(text)} value={email}></TextInput>
            <Text style={styles.titleRegisterScreen}>Confirmar email</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => setEmail2(text)} value={email2}></TextInput>
            {email !== email2 && <Text style={styles.errorMail}>Los emails deben coincidir.</Text>}
            {nombre !== "" && apellido !== "" && documento !== "" && telefono !== "" && direccion !== "" && email === email2 && <Button 
                style={styles.buttonRegisterScreen} 
                title='Registrarse'
                onPress={handleButtonClick}
            />}
            <Modal
              offset={0}
              open={visibilityModal}
              overlayStyle={{backgroundColor:'transparent'}}
            >
              <View style={styles.confirmationModal}>
                <Text style={styles.modalTitle}>Registro en proceso de verificación.</Text>
                <Text style={{fontSize: 15, margin: 20}}>Se le notificará por mail cuando esté habilitado para ingresar.</Text>
                <Button style={styles.modalButton} title='Aceptar' type='solid' onPress={closeModal}/>
              </View>
            </Modal>
        </View>
      </ScrollView>
    );
}
