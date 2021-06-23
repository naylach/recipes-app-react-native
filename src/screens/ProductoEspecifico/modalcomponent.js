import React from 'react';
import {
  Modal,
  Text,
  View,
  Image,StyleSheet
} from 'react-native';
import { Button } from 'react-native-elements'

export default function ModalPujar (props){ 
  return props.trigger ?(
    <Modal style={styles.confirmationModal}>
                  <Text style={styles.modalTitle}>Medio de pago creado</Text>
                  <Image style={styles.imageModal} source={require('../../../assets/icons/check.png')}/>
                  <Button style={styles.modalButton} title='Aceptar' type='solid' onPress={()=>props.setTrigger(false)}/>
                </Modal>    
  ):(""
);
}

const styles = StyleSheet.create({
  mainModal: {
    borderRadius: 15,
    height: 350,
    alignSelf: "center",
    width: 400,
    backgroundColor: "white",
    margin: -100,
  },
  confirmationModal: {
    borderRadius: 15,
    height: 200,
    alignSelf: "center",
    width: 400,
    backgroundColor: "white",
    margin: -100,
  },
  modal: {
    flexDirection: "row",
    padding: 20,
  },
  modalTitle: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
  modalLabel: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: 5,
  },
  modalInput: {
    fontSize: 15,
    textAlign: "left",
    borderRadius: 15,
    height: 22,
    width: 190,
    marginBottom: 8,
    backgroundColor: "#B0D4F7",
    paddingHorizontal: 5,
  },
  modalButton: {
    color: "#4BA9FF",
    textAlign: "center",
    alignSelf: "center",
    width: 100,
    margin: 10,
  },
  imageModal: {
    width: 60,
    height: 60,
    alignSelf: "center",
  },
  modalSelector: {
    justifyContent: "space-around",
    padding: 5,
    alignSelf: "center",
    width: 240,
    height: 45,
    backgroundColor: "#8dbfe3",
    borderRadius: 5,
    borderColor: "blue",
  },
});