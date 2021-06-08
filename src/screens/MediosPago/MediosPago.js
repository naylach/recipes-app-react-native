import React, { useState, useEffect } from 'react';
import { Button, CheckBox } from 'react-native-elements';
// import { Overlay } from 'react-native-modal-overlay';
import {
  ScrollView,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';
import styles from './styles';
import { tarjetas, cuentas } from '../../data/dataArrays';
import Modal from "react-native-simple-modal";

export default function MediosPago(props) {
  const [tipo, setTipo]= useState("");
  const [nombre, setNombre]= useState("");
  const [numero, setNumero]= useState("");
  const [vencimiento, setVencimiento]= useState("");
  const [cvv, setCVV]= useState("");
  const [visibilityModal1, setVisibilityModal1]= useState(false);
  const [visibilityModal2, setVisibilityModal2]= useState(false);
  const [deleting, setDeleting]= useState(null);
  const [visibilityModalCreado, setVisibilityModalCreado]= useState(false);
  const [visibilityModalEliminado, setVisibilityModalEliminado]= useState(false);
  const [checked, setChecked]= useState(null);
  const [visibilityModalError, setVisibilityModalError]= useState(false);
  const [tarjetas, setTarjetas]= useState([]);
  const [cuentas, setCuentas]= useState([]);

  useEffect( () => {
    //api
    setTarjetas(tarjetas);
    setCuentas(cuentas);
  }, []);

  const openModal = () => setVisibilityModal1(true);
  const closeModal = () => setVisibilityModal1(false);
  const openModal2 = () => setDeleting(checked);
  const closeModal2 = () => setVisibilityModal2(false);
  const openModalEliminado = () => {
    setTarjetas(tarjetas.filter((t) => t.id !== deleting));
    setCuentas(cuentas.filter((c) => c.id !== deleting));
    setDeleting(null);
  };
  //pendiente de los ids iguales
  const openModalCreado = () => setVisibilityModalCreado(true);
  const openModalError = () => setVisibilityModalError(true);

    const Separator = () => (
        <View style={styles.separator} />
      );
    const closeModalEliminado = () => {
      setVisibilityModal2(false);
      setVisibilityModalEliminado(false);
      props.navigation.navigate('MediosPago');
    };
    const closeModalCreado = () => {
      setVisibilityModalCreado(false);
      setVisibilityModal1(false);
      props.navigation.navigate('MediosPago');
    };
    const closeModalError = () => {
      setVisibilityModalError(false);
      setVisibilityModal1(false);
      props.navigation.navigate('MediosPago');
    };
    const handleAgregarMedio = () => {
      //if (true)
        closeModalCreado();
        openModalCreado();
      //else
      //openModalError();
    };
    return (

      <ScrollView style={styles.mainContainer}>
        <View>
            <View style={styles.header}>
                <Image style={styles.image} source={require('../../../assets/icons/credit-card.png')}/>
                <Text style={styles.title}>Tarjetas</Text>
            </View>
            <Separator />
            {tarjetas.map((tarjeta, i) => {
              return  <CheckBox
                key={i}
                checked={tarjeta.id===checked}
                title={`${tarjeta.name}       **** ${tarjeta.number.substr(-4,4)}`}
                style={styles.checkbox}
                onPress={() => setChecked(tarjeta.id === checked ? null: tarjeta.id)}
               />
            })}
            <View style={styles.header}>
                <Image style={styles.image} source={require('../../../assets/icons/bank.png')}/>
            <Text style={styles.title}>Cuentas bancarias</Text>
            </View>
            <Separator />
            {cuentas.map((cuenta, i) => {
              return <CheckBox
                key={i}
                checked={cuenta.id===checked}
                title={`${cuenta.name}       **** ${cuenta.number.substr(-4,4)}`}
                style={styles.checkbox}
                onPress={() => setChecked(cuenta.id === checked ? null: cuenta.id)}
             />
            })}
            <View style={styles.buttonArea}>
              <Modal
                offset={-300}
                open={visibilityModal1}
                containerStyle={{
                  justifyContent: "center"
                }}
                overlayStyle={{backgroundColor:'transparent'}}
              >
                <View style={styles.mainModal}>
                  <Text style={styles.modalTitle}>Nuevo medio de pago</Text>
                  <View style={styles.modal}>
                    <View style={styles.column}>
                      <Text style={styles.modalLabel}>Tipo:</Text>
                      <Text style={styles.modalLabel}>Nombre:</Text>
                      <Text style={styles.modalLabel}>Número:</Text>
                      <Text style={styles.modalLabel}>Vencimiento:</Text>
                      <Text style={styles.modalLabel}>CVV:</Text>
                    </View>
                    <View style={styles.column}>
                      <TextInput style={styles.modalInput} onChangeText={text => setTipo(text)} value={tipo} ></TextInput>
                      <TextInput style={styles.modalInput} onChangeText={text => setNombre(text)} value={nombre} ></TextInput>
                      <TextInput style={styles.modalInput} onChangeText={text => setNumero(text)} value={numero} ></TextInput>
                      <TextInput style={styles.modalInput} onChangeText={text => setVencimiento(text)} value={vencimiento} ></TextInput>
                      <TextInput style={styles.modalInput} onChangeText={text => setCVV(text)} value={cvv} ></TextInput>                    
                    </View>
                  </View>
                  <View style={styles.columns}>
                    <Button style={styles.modalButton} title='Agregar' type='solid' onPress={handleAgregarMedio()}/>
                    <Button style={styles.modalButton} title='Cerrar' type='solid' onPress={closeModal()}/>
                  </View>
                </View>
              </Modal>
              <Button style={styles.button} title='Nuevo' type='solid' onPress={openModal()}/>
              <Modal
                offset={-300}
                open={visibilityModalCreado}
              >
                <View style={styles.confirmationModal}>
                  <Text style={styles.modalTitle}>Medio de pago en proceso de verificación</Text>
                  <Image style={styles.imageModal} source={require('../../../assets/icons/check.png')}/>
                  <Button style={styles.modalButton} title='Aceptar' type='solid' onPress={closeModalCreado()}/>
                </View>
              </Modal>
              <Modal
                offset={-300}
                open={visibilityModalError}
              >
                <View style={styles.confirmationModal}>
                  <Text style={styles.modalTitle}>Los datos ingresados están incompletos</Text>
                  <Image style={styles.imageModal} source={require('../../../assets/icons/cancel.png')}/>
                  <Button style={styles.modalButton} title='Aceptar' type='solid' onPress={closeModalError()}/>
                </View>
              </Modal>
              <Button style={styles.button} title='Borrar' type='solid' onPress={openModal2()}/>
              <Modal
                offset={-300}
                open={deleting !== null}
                overlayStyle={{backgroundColor:'transparent'}}
              >
                <View style={styles.confirmationModal}>
                  <Text style={styles.modalTitle}>¿Está seguro de que desea borrar el medio de pago seleccionado?</Text>
                  <View style={styles.columns}>
                    <Button style={styles.modalButton} title='Sí' type='solid' onPress={openModalEliminado()}/>
                    <Button style={styles.modalButton} title='No' type='solid' onPress={closeModal2()}/>
                  </View>
                </View>
              </Modal>
              <Modal
                offset={-300}
                open={visibilityModalEliminado}
              >
                <View style={styles.confirmationModal}>
                  <Text style={styles.modalTitle}>Medio de pago eliminado</Text>
                  <Image style={styles.imageModal} source={require('../../../assets/icons/check.png')}/>
                  <Button style={styles.modalButton} title='Aceptar' type='solid' onPress={closeModalEliminado()}/>
                </View>
              </Modal>
            </View>
        </View>
      </ScrollView>

    );
}
