import React, { useContext } from 'react';
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
      email: "", password: "", password2: "", visibilityModal: false, visibilityModal1: false, visibilityModal2: false, visibilityModal3: false
    }
  }
  openModal = () => this.setState({ visibilityModal: true });
  openModal1 = () => this.setState({ visibilityModal1: true });
  openModal2 = () => this.setState({ visibilityModal2: true });
  openModal3 = () => this.setState({ visibilityModal3: true });

  render() {
    //const { setCurrentUser } = useContext(DataContext);
    
    const handleLoginClick = (e) => {
      //if (){ -> existe el usuario y eso
      // fetch(
      //   `http://localhost:8000/usuarios/login/mail/${email}/pass/${password}`
      // )
      //   .then((response) => response.json())
      //   .then((r) => {
      //     console.log(r);
      //     setCurrentUser(r);
      //   })
      //   .catch((e) => console.log(e));
        navigation.navigate('Home');
        console.log("holaaaaaaaaa");
      //}else if (){ -> existe usuario pero aun no está habilitado
      // this.openModal();
      //}else if () -> usuario no registrado{
      // this.openModal3();
      //}else if (){ -> usuario registrado, habilitado para crear contraseña
      // this.openModal2();}
      // else{ -> usuario registrado y habilitado, datos incorrectos
      // this.openModal1();}
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
    const closeModal1 = () => {
      this.setState({ visibilityModal1: false });
    };
    const closeModal2 = () => {
      this.setState({ visibilityModal2: false });
    };
    const closeModal3 = () => {
      this.setState({ visibilityModal3: false });
      navigation.navigate('Registro');
    };
    const { navigation } = this.props;
    let {email, password, password2} = this.state;
    return (
      <ScrollView style={styles.mainContainer}  scrollEnabled='false'>
        <View>
            <Text style={styles.title}>Usuario</Text>
            <TextInput style={styles.input} onChangeText={text => this.setState({email: text})} value={email}></TextInput>
            {1 === 1 && (
              <View>
                <Text style={styles.title}>Contraseña</Text>
                <TextInput secureTextEntry={true} style={styles.input} onChangeText={text => this.setState({password: text})} value={password}></TextInput>
              </View>
            )}

            {1 === 1 && (
              <View>
                <Text style={styles.title}>Confirmar contraseña</Text>
                <TextInput secureTextEntry={true} style={styles.input} onChangeText={text => this.setState({password2: text})} value={password2}></TextInput>
              </View>
            )}

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
            <Modal
              offset={0}
              open={this.state.visibilityModal1}
            >
              <View style={styles.confirmationModal}>
                <Text style={styles.modalTitle}>Los datos ingresados son incorrectos.</Text>
                <Text style={{fontSize: 15, margin: 20}}>Verifique usuario y contraseña ingresados.</Text>
                <Button style={styles.modalButton} title='Aceptar' type='solid' onPress={closeModal1}/>
              </View>
            </Modal>
            <Modal
              offset={0}
              open={this.state.visibilityModal2}
            >
              <View style={styles.confirmationModal}>
                <Text style={styles.modalTitle}>¡Bienvenido a SubastApp!</Text>
                <Text style={{fontSize: 15, margin: 20}}>A continuación, ingrese su nueva contraseña.</Text>
                <Button style={styles.modalButton} title='Aceptar' type='solid' onPress={closeModal2}/>
              </View>
            </Modal>
            <Modal
              offset={0}
              open={this.state.visibilityModal3}
            >
              <View style={styles.confirmationModal}>
                <Text style={styles.modalTitle}>Usuario no registrado.</Text>
                <Text style={{fontSize: 15, margin: 20}}>Para ingresar a la aplicación, debe registrarse primero.</Text>
                <Button style={styles.modalButton} title='Aceptar' type='solid' onPress={closeModal3}/>
              </View>
            </Modal>
        </View>
      </ScrollView>
    );
  }
}
