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

export default class Login extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Iniciar sesión'
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "", password: ""
    }
  }

  render() {
    // const { currentUser, setCurrentUser, propiedadesList } = useContext(
    //   DataContext
    // );
    
    const handleLoginClick = (e) => {
      //if (){ -> existe el usuario y eso
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
    const { navigation } = this.props;
    let email, password;
    return (
      <ScrollView style={styles.mainContainer}  scrollEnabled='false'>
        <View>
            <Text style={styles.title}>Usuario</Text>
            <TextInput style={styles.input} onChangeText={this.setState(email)} value={email}></TextInput>
            <Text style={styles.title}>Contraseña</Text>
            <TextInput secureTextEntry={true} style={styles.input} onChangeText={this.setState(password)} value={password}></TextInput>
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

        </View>
      </ScrollView>
    );
  }
}
