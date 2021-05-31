import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';
import { users } from '../../data/dataArrays.js';


export default class DrawerContainer extends React.Component {
  render() {
    const { navigation } = this.props;
    const Separator = () => (
      <View style={styles.separator} />
    );
    return (
      <View style={styles.content}>
          <View style={styles.header}>
            <Image style={styles.image} source={require('../../../assets/icons/selfie.jpeg')}/>
            <View style={styles.name}>
              <Text>{users[0].nombre} {users[0].apellido}</Text>
              <Text>{users[0].email}</Text>
            </View>
          </View>
          <Separator />
        <View style={styles.container}>
          <MenuButton
            title="Inicio"
            source={require('../../../assets/icons/home.png')}
            onPress={() => {
              navigation.navigate('Home');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Mis publicaciones"
            source={require('../../../assets/icons/publicaciones.png')}
            onPress={() => {
              navigation.navigate('MisPublicaciones');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Cargar nuevo producto"
            source={require('../../../assets/icons/upload.png')}
            onPress={() => {
              navigation.navigate('CargarNuevoProducto');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Historial transacciones"
            source={require('../../../assets/icons/history.png')}
            onPress={() => {
              navigation.navigate('HistorialTransacciones');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Medios de pago"
            source={require('../../../assets/icons/payment.png')}
            onPress={() => {
              navigation.navigate('MediosPago');
              navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Login"
            source={require('../../../assets/icons/info.png')}
            onPress={() => {
              navigation.navigate('Login');
              navigation.closeDrawer();
            }}
          />
        </View>
        <View style={styles.logout}>
          <MenuButton
            title="Cerrar Sesión"
            source={require('../../../assets/icons/out.png')}
            onPress={() => {
              navigation.navigate('CerrarSesion');
              navigation.closeDrawer();
            }}
          />
        </View>
      </View>
    );
  }
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};