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
import { DataContext } from "../../context";
import { Alert } from 'react-native';
import Modal from "react-native-simple-modal";

export default class Login extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Iniciar sesión'
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "", password: "", password2: "", visibilityModal: false
    }
  }
  openModal = () => this.setState({ visibilityModal: true });

  render() {
    // const { currentUser, setCurrentUser, propiedadesList } = useContext(
    //   DataContext
    // );
    
    const handleLoginClick = (e) => {
      //if (){ -> existe el usuario y eso
      //this.state.openModal()
        navigation.navigate('Home');
      //setCurrentUser(usuario);
      //}else -> modal que indique que los datos ingresados son incorrectos
    };
    const handleContinueClick = (e) => {
        navigation.navigate('Home');
    };
    const handleRegisterClick = (e) => {
        navigation.navigate('Registro');
    };
    const closeModal = () => {
      this.setState({ visibilityModal: false })
      navigation.navigate('Home');
    };
    const { navigation } = this.props;
    let email, password, password2;
    return (
      <ScrollView style={styles.mainContainer}  scrollEnabled='false'>
        <View>
            <Text style={styles.title}>Usuario</Text>
            <TextInput style={styles.input} onChangeText={text => this.setState({email: text})} value={email}></TextInput>
            <Text style={styles.title}>Contraseña</Text>
            <TextInput secureTextEntry={true} style={styles.input} onChangeText={text => this.setState({password: text})} value={password}></TextInput>
            {1 === 1 && (<Text style={styles.title}>Confirmar contraseña</Text>)}
            {1 === 1 && (<TextInput secureTextEntry={true} style={styles.input} onChangeText={text => this.setState({password2: text})} value={password2}></TextInput>)}

            <Button 
              style={styles.buttonLogin} 
              title='Iniciar sesión'
              onPress={handleLoginClick}
            />

            <Button 
              style={styles.button} 
              title='Registrarse'
              onPress={handleRegisterClick}
            />
            <Button 
              style={styles.button} 
              title='Continuar como invitado'
              onPress={handleContinueClick}
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
