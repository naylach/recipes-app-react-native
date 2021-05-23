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

export default class Registro extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Registro'
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      nombre: "", apellido: "", dni: "", email: "", email2: "", telefono: "", password: "", password2: ""
    }
  }

  render() {
    const { navigation } = this.props;
    let nombre, apellido, dni, email, email2, telefono, password, password2;
    return (
      <ScrollView style={styles.mainContainer} scrollEnabled='false'>
        <View>
            <Text style={styles.titleRegisterScreen}>Nombre</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={this.setState(nombre)} value={nombre}></TextInput>
            <Text style={styles.titleRegisterScreen}>Apellido</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={this.setState(apellido)} value={apellido}></TextInput>
            <Text style={styles.titleRegisterScreen}>DNI</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={this.setState(dni)} value={dni}></TextInput>
            <Text style={styles.titleRegisterScreen}>Email</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={this.setState(email)} value={email}></TextInput>
            <Text style={styles.titleRegisterScreen}>Confirmar email</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={this.setState(email2)} value={email2}></TextInput>
            <Text style={styles.titleRegisterScreen}>Teléfono</Text>
            <TextInput style={styles.inputRegisterScreen} onChangeText={this.setState(telefono)} value={telefono}></TextInput>
            <Text style={styles.titleRegisterScreen}>Contraseña</Text>
            <TextInput secureTextEntry={true} style={styles.inputRegisterScreen} onChangeText={this.setState(password)} value={password}></TextInput>
            <Text style={styles.titleRegisterScreen}>Confirmar contraseña</Text>
            <TextInput secureTextEntry={true} style={styles.inputRegisterScreen} onChangeText={this.setState(password2)} value={password2}></TextInput>           
            <Button 
                style={styles.buttonRegisterScreen} 
                title='Registrarse'
                onPress={() => {
                    navigation.navigate('Home');
                }}
            />
        </View>
      </ScrollView>
    );
  }
}
