import React, { useState } from 'react';
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
import Modal2 from "react-native-simple-modal";
import ModalCreado from "react-native-simple-modal";
import ModalEliminado from "react-native-simple-modal";
import ModalError from "react-native-simple-modal";

export default class MediosPago extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Medios de Pago'
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      tipo: "", 
      nombre: "", 
      numero: "", 
      vencimiento: "", 
      cvv: "", 
      visibilityModal1: false, 
      visibilityModal2: false, 
      visibilityModalCreado: false,
      visibilityModalEliminado: false, 
      checked: false, 
      visibilityModalError: false
    }
  }
  openModal = () => this.setState({ visibilityModal1: true });
  closeModal = () => this.setState({ visibilityModal1: false });
  openModal2 = () => this.setState({ visibilityModal2: true });
  closeModal2 = () => this.setState({ visibilityModal2: false });
  openModalEliminado = () => this.setState({ visibilityModalEliminado: true });
  openModalCreado = () => this.setState({ visibilityModalCreado: true });
  openModalError = () => this.setState({ visibilityModalError: true });

  render() {
    const { navigation } = this.props;
    let tipo, nombre, numero, vencimiento, cvv;
    const Separator = () => (
        <View style={styles.separator} />
      );
    const closeModalEliminado = () => {
      this.setState({ visibilityModal2: false });
      this.setState({ visibilityModalEliminado: false });
      navigation.navigate('MediosPago');
    };
    const closeModalCreado = () => {
      this.setState({ visibilityModalCreado: false });
      this.setState({ visibilityModal1: false });
      navigation.navigate('MediosPago');
    };
    const closeModalError = () => {
      this.setState({ visibilityModalError: false });
      this.setState({ visibilityModal1: false });
      navigation.navigate('MediosPago');
    };
    const handleAgregarMedio = () => {
      //if (true)
        closeModalCreado();
        this.openModalCreado();
      //else
      //this.openModalError();
    };
    return (

      <ScrollView style={styles.mainContainer}>
        <View>
            <View style={styles.header}>
                <Image style={styles.image} source={require('../../../assets/icons/credit-card.png')}/>
                <Text style={styles.title}>Tarjetas</Text>
            </View>
            <Separator />
            <CheckBox
              checked={this.state.checked}
              title={`${tarjetas[0].name}       **** ${tarjetas[0].number.substr(-4,4)}`}
              style={styles.checkbox}
              onPress={() => this.setState({checked: !this.state.checked})}
            />
            <CheckBox
              checked={this.state.checked}
              title={`${tarjetas[1].name}       **** ${tarjetas[1].number.substr(-4,4)}`}
              style={styles.checkbox}
              onPress={() => this.setState({checked: !this.state.checked})}
            />
            <CheckBox
              checked={this.state.checked}
              title={`${tarjetas[2].name}       **** ${tarjetas[2].number.substr(-4,4)}`}
              style={styles.checkbox}
              onPress={() => this.setState({checked: !this.state.checked})}
            />
            <View style={styles.header}>
                <Image style={styles.image} source={require('../../../assets/icons/bank.png')}/>
            <Text style={styles.title}>Cuentas bancarias</Text>
            </View>
            <Separator />
            <CheckBox
              checked={this.state.checked}
              title={`${cuentas[0].name}       **** ${cuentas[0].number.substr(-4,4)}`}
              style={styles.checkbox}
              onPress={() => this.setState({checked: !this.state.checked})}
            />
            <CheckBox
              checked={this.state.checked}
              title={`${cuentas[1].name}       **** ${cuentas[1].number.substr(-4,4)}`}
              style={styles.checkbox}
              onPress={() => this.setState({checked: !this.state.checked})}
            />
            <CheckBox
              checked={this.state.checked}
              title={`${cuentas[2].name}       **** ${cuentas[2].number.substr(-4,4)}`}
              style={styles.checkbox}
              onPress={() => this.setState({checked: !this.state.checked})}
            />
            <View style={styles.buttonArea}>
              <Modal
                offset={-300}
                open={this.state.visibilityModal1}
                containerStyle={{
                  justifyContent: "center"
                }}
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
                      <TextInput style={styles.modalInput} onChangeText={this.setState(tipo)} value={tipo} ></TextInput>
                      <TextInput style={styles.modalInput} onChangeText={this.setState(nombre)} value={nombre} ></TextInput>
                      <TextInput style={styles.modalInput} onChangeText={this.setState(numero)} value={numero} ></TextInput>
                      <TextInput style={styles.modalInput} onChangeText={this.setState(vencimiento)} value={vencimiento} ></TextInput>
                      <TextInput style={styles.modalInput} onChangeText={this.setState(cvv)} value={cvv} ></TextInput>                    
                    </View>
                  </View>
                  <View style={styles.columns}>
                    <Button style={styles.modalButton} title='Agregar' type='solid' onPress={handleAgregarMedio}/>
                    <Button style={styles.modalButton} title='Cerrar' type='solid' onPress={this.closeModal}/>
                  </View>
                </View>
              </Modal>
              <Button style={styles.button} title='Nuevo' type='solid' onPress={this.openModal}/>
              <ModalCreado
                offset={-300}
                open={this.state.visibilityModalCreado}
              >
                <View style={styles.confirmationModal}>
                  <Text style={styles.modalTitle}>Medio de pago creado</Text>
                  <Image style={styles.imageModal} source={require('../../../assets/icons/check.png')}/>
                  <Button style={styles.modalButton} title='Aceptar' type='solid' onPress={closeModalCreado}/>
                </View>
              </ModalCreado>
              <ModalError
                offset={-300}
                open={this.state.visibilityModalError}
              >
                <View style={styles.confirmationModal}>
                  <Text style={styles.modalTitle}>Los datos ingresados están incompletos</Text>
                  <Image style={styles.imageModal} source={require('../../../assets/icons/cancel.png')}/>
                  <Button style={styles.modalButton} title='Aceptar' type='solid' onPress={closeModalError}/>
                </View>
              </ModalError>
              <Button style={styles.button} title='Borrar' type='solid' onPress={this.openModal2}/>
              <Modal2
                offset={-300}
                open={this.state.visibilityModal2}
              >
                <View style={styles.confirmationModal}>
                  <Text style={styles.modalTitle}>¿Está seguro de que desea borrar el medio de pago seleccionado?</Text>
                  <View style={styles.columns}>
                    <Button style={styles.modalButton} title='Sí' type='solid' onPress={this.openModalEliminado}/>
                    <Button style={styles.modalButton} title='No' type='solid' onPress={this.closeModal2}/>
                  </View>
                </View>
              </Modal2>
              <ModalEliminado
                offset={-300}
                open={this.state.visibilityModalEliminado}
              >
                <View style={styles.confirmationModal}>
                  <Text style={styles.modalTitle}>Medio de pago eliminado</Text>
                  <Image style={styles.imageModal} source={require('../../../assets/icons/check.png')}/>
                  <Button style={styles.modalButton} title='Aceptar' type='solid' onPress={closeModalEliminado}/>
                </View>
              </ModalEliminado>
            </View>
        </View>
      </ScrollView>

    );
  }
}
