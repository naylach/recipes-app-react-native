import React,{useContext} from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';
import { users } from '../../data/dataArrays.js';
import { DataContext } from "../../context";

export default function DrawerContainer (props){
  const {url,setPublicacionesMineList, currentUser, setCurrentUser, setCurrentSubasta, setPrimeraSubasta }= useContext(DataContext);
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
      {currentUser &&
        <View style={styles.header}>
          <Image style={styles.image} source={{uri: currentUser.imagen}}/>
          <View style={styles.name}>
            <Text>{currentUser.nombre}</Text>
            <Text>{currentUser.email}</Text>
          </View>
        </View>
      }
      {currentUser &&<Separator />}
      <View style={styles.container}>
        {currentUser && <>
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
        </>}
        {!currentUser && <MenuButton
          title="Login"
          source={require('../../../assets/icons/info.png')}
          onPress={() => {
            props.navigation.navigate('Login');
            props.navigation.closeDrawer();
            console.log("usuarito", currentUser);
          }}
        />
        }
      </View>
      {currentUser &&
      <View style={styles.logout}>
        <MenuButton
          title="Cerrar Sesión"
          source={require('../../../assets/icons/out.png')}
          onPress={() => {
            setCurrentUser(null);
            setCurrentSubasta(null);
            setPrimeraSubasta(1);
            props.navigation.navigate('CerrarSesion');
            props.navigation.closeDrawer();
          }}
        />
      </View>
      }
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};