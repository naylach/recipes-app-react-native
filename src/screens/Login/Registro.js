import React from 'react';
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

export default class Registro extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Registro'
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      nombre: "", apellido: "", dni: "", email: "", email2: "", telefono: "", visibilityModal: false
    }
  }
  openModal = () => this.setState({ visibilityModal: true });

  render() {
    const { navigation } = this.props;
    const closeModal = () => {
      this.setState({ visibilityModal: false })
      navigation.navigate('Home');
    };
    let nombre, apellido, dni, email, email2, telefono
    return (
      <ScrollView style={styles.mainContainer} scrollEnabled='false'>
        <View>
            <Text style={styles.titleRegisterScreen}>Nombre</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => this.setState({nombre: text})} value={nombre}></TextInput>
            <Text style={styles.titleRegisterScreen}>Apellido</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => this.setState({apellido: text})} value={apellido}></TextInput>
            <Text style={styles.titleRegisterScreen}>DNI</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => this.setState({dni: text})} value={dni}></TextInput>
            <Text style={styles.titleRegisterScreen}>Email</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => this.setState({email: text})} value={email}></TextInput>
            <Text style={styles.titleRegisterScreen}>Confirmar email</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => this.setState({email2: text})} value={email2}></TextInput>
            <Text style={styles.titleRegisterScreen}>Teléfono</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={text => this.setState({telefono: text})} value={telefono}></TextInput>
            <Button 
                style={styles.buttonRegisterScreen} 
                title='Registrarse'
                onPress={() => {
                  this.openModal()
                }}
            />
            <Modal
              offset={0}
              open={this.state.visibilityModal}
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
}
