import React,{useContext} from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';
import { users } from '../../data/dataArrays.js';
import { DataContext } from "../../context";

export default function DrawerContainer (props){
  const {url,setPublicacionesMineList,publicacionesMineList}= useContext(DataContext);
   function getMyPublicaciones(){
    fetch(url+'productos/cliente/?idCliente=16')
                    .then((response) => response.json())
                    .then((res) => setPublicacionesMineList(res));
  }
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
              props.navigation.navigate('Home');
              props.navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Mis publicaciones"
            source={require('../../../assets/icons/publicaciones.png')}
            onPress={() => {
              getMyPublicaciones()
              //console.log(publicacionesMineList)
              props.navigation.navigate('MisPublicaciones');
              props.navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Cargar nuevo producto"
            source={require('../../../assets/icons/upload.png')}
            onPress={() => {
              props.navigation.navigate('CargarNuevoProducto');
              props.navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Historial transacciones"
            source={require('../../../assets/icons/history.png')}
            onPress={() => {
              props.navigation.navigate('HistorialTransacciones');
              props.navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Medios de pago"
            source={require('../../../assets/icons/payment.png')}
            onPress={() => {
              props.navigation.navigate('MediosPago');
              props.navigation.closeDrawer();
            }}
          />
          <MenuButton
            title="Login"
            source={require('../../../assets/icons/info.png')}
            onPress={() => {
              props.navigation.navigate('Login');
              props.navigation.closeDrawer();
            }}
          />
        </View>
        <View style={styles.logout}>
          <MenuButton
            title="Cerrar Sesión"
            source={require('../../../assets/icons/out.png')}
            onPress={() => {
              props.navigation.navigate('CerrarSesion');
              props.navigation.closeDrawer();
            }}
          />
        </View>
      </View>
    );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};