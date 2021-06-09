//Información del producto específico en el catálogo

import {getEspecificacionProductos} from '../../data/MockDataAPI' ;


import React, { useEffect, useState} from 'react';
import {
  Modal,
  Text,
  View,
  Image,
  Pressable,
  TouchableHighlight,TextInput
} from 'react-native';
import styles from './styles';
import { Button } from 'react-native-elements'
import {
  getProductUrl,
} from '../../data/MockDataAPI';

import { pujas1 } from "../../data/dataArrays.js";

export default function EspecificacionProductoScreen(props) {
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ pujas, setPujas ] = useState(pujas1);

  useEffect( () => {
    setInterval( () => {
      //API DE PUJAS
      for(const puja of pujas){
        if(!pujas.find((p) => {
          if(p.id === puja.id)
            return true
          return false
        })){
          const p = pujas.concat(puja);
          setPujas(p);
        }
      }
    }, 2000)
  }, []);

 const handlePuja = () => {
   //api pujas aqui
  setModalVisible(false);
  };
  const productoid = props.navigation.getParam('product');
  return (
      <View style={{ borderBottomWidth: 0.4, marginBottom: 10, borderBottomColor: 'grey' }}>
      {pujas.length > 0 && (
        <Text style={styles.titleIngredient}>Última puja: ${pujas[pujas.length - 1].importe}</Text>)}
        <Image style={styles.photoIngredient} source={{ uri: '' + getProductUrl(productoid) }} />
      <Text style={styles.titleIngredient}>Información</Text>
      <Text style={styles.ingredientInfo}>Precio base: {getEspecificacionProductos(12).precioBase} </Text>
      <Text style={styles.ingredientInfo}>Tipo de producto:  {getEspecificacionProductos(12).tipoProducto} </Text>
      <Text style={styles.ingredientInfo}>Dueño Actual: {getEspecificacionProductos(12).duenioActual}  </Text>
      <Text style={styles.ingredientInfo}>Descripción: {getEspecificacionProductos(12).descripcion} </Text>
      <Text style={styles.ingredientInfo}>Número de pieza: {getEspecificacionProductos(12).numeroPieza} </Text> 
    
      {1 === 1 && (<Button
        title='Pujar'
        style={styles.buttonLogin}      
        onPress={() => setModalVisible(true) }/>)}

    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}>
                <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>¿Cuánto desea pujar?</Text>
          <TextInput style={styles.txtInput}>$ </TextInput>
          
          <View style={styles.columns}>
          <Pressable
            style={[styles.button, styles.buttonAcept]}
            onPress={handlePuja}
          >
            <Text style={styles.textStyle}>Confirmar</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.textStyle}>Cancelar</Text>
          </Pressable>
          </View>
        </View>
      </View>
    </Modal>

  </View>
  );
}
