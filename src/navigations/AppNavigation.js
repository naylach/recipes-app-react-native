import React from "react";
import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from '../screens/Home/HomeScreen';
import CatalogoScreen from '../screens/Catalogo/CatalogoScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import EspecificacionProductoScreen from '../screens/ProductoEspecifico/EspecificacionProductoScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import ListadoProductosScreen from '../screens/ProductosEnSubasta/ListadoProductosScreen';
import MiPerfilScreen from '../screens/MiPerfil/MiPerfil';
import MediosPagoScreen from '../screens/MediosPago/MediosPago';
import LoginScreen from '../screens/Login/Login';
import RegistroScreen from '../screens/Login/Registro';
import HistorialTransaccionesScreen from '../screens/HistorialTransacciones/HistorialTransacciones';
import CargarNuevoProductoScreen from '../screens/CargarNuevoProducto/CargarNuevoProducto';
import MisPublicacionesScreen from '../screens/MisPublicaciones/MisPublicaciones';

import MenuImage from '../components/MenuImage/MenuImage';
import ProfileButton from '../components/ProfileButton/ProfileButton';
import BackButton from '../components/BackButton/BackButton';

const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'Inicio',
          headerLeft: () => 1===1 ?
            <MenuImage
              onPress={() => {
                navigation.openDrawer();
              }}
            /> : <></>,
          headerRight: () => (
            <ProfileButton
              onPress={() => {
                navigation.navigate('MiPerfil');
              }}
            />
          ),
        }
      }
    },
    Catalogo: {
      screen: CatalogoScreen,
      navigationOptions: ({ navigation }) => {
        return {
         title: 'Catalogo',
         headerTransparent: 'true',
         headerLeft: () => <BackButton
           onPress={() => {
             navigation.goBack();
           }}
         />
       }
     }
    },
    EspecificacionProducto: {
      screen: EspecificacionProductoScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: navigation.getParam('name')
        }
      }
    },
    Search: SearchScreen,
    ListadoProductos: {
      screen: ListadoProductosScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: navigation.getParam('title'),
          headerTitleStyle: {
            fontSize: 16
          }
        }
      }
    },
    MiPerfil: {
      screen: MiPerfilScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'Mi Perfil'
        }
      }},
    MediosPago: {
      screen: MediosPagoScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'Medios de Pago'
        }
      }},
    Login: {
      screen: LoginScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'Iniciar sesión'
        };
      }
    },
    Registro: {
      screen: RegistroScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'Registro'
        };
      }
    },
    HistorialTransacciones: {
      screen: HistorialTransaccionesScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'Historial de Transacciones'
        }
      }
    },
    CargarNuevoProducto: {
      screen: CargarNuevoProductoScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: 'Cargar nuevo producto'
        }
      }
    },
    MisPublicaciones: {
      screen: MisPublicacionesScreen,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Mis Publicaciones",
        }
      }
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        paddingTop: 10,
        flex: 1,
      }
    })
  }
); 

const DrawerStack = createDrawerNavigator(
  {
    Main: MainNavigator
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'Main',
    drawerWidth: 250,
    contentComponent: DrawerContainer
  }
);

export default AppContainer = createAppContainer(DrawerStack);

console.disableYellowBox = true;