import React, { useState, useEffect } from 'react';
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

export default function Registro(props) {
  const [ nombre, setNombre ] = useState("");
  const [ apellido, setApellido ] = useState("");
  const [ dni, setDNI ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ email2, setEmail2 ] = useState("");
  const [ telefono, setTelefono ] = useState("");
  const [ visibilityModal, setVisibilityModal ] = useState(false);

  const openModal = () => setVisibilityModal(true);

  const closeModal = () => {
    setVisibilityModal(false);
    props.navigation.navigate('Home');
  };
    return (
      <ScrollView style={styles.mainContainer} scrollEnabled='false'>
        <View>
            <Text style={styles.titleRegisterScreen}>Nombre</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => setNombre(text)} value={nombre}></TextInput>
            <Text style={styles.titleRegisterScreen}>Apellido</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => setApellido(text)} value={apellido}></TextInput>
            <Text style={styles.titleRegisterScreen}>DNI</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => setDNI(text)} value={dni}></TextInput>
            <Text style={styles.titleRegisterScreen}>Email</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => setEmail(text)} value={email}></TextInput>
            <Text style={styles.titleRegisterScreen}>Confirmar email</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => setEmail2(text)} value={email2}></TextInput>
            <Text style={styles.titleRegisterScreen}>Teléfono</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => setTelefono(text)} value={telefono}></TextInput>
            <Button 
                style={styles.buttonRegisterScreen} 
                title='Registrarse'
                onPress={() => {
                  openModal()
                }}
            />
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
