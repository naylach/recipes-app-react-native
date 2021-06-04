import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import CatalogoScreen from '../screens/Catalogo/CatalogoScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
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

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Categories: CategoriesScreen,
    Catalogo: CatalogoScreen,
    RecipesList: RecipesListScreen,
    EspecificacionProducto: EspecificacionProductoScreen,
    Search: SearchScreen,
    ListadoProductos: ListadoProductosScreen,
    MiPerfil: MiPerfilScreen,
    MediosPago: MediosPagoScreen,
    Login: LoginScreen,
    Registro: RegistroScreen,
    HistorialTransacciones: HistorialTransaccionesScreen,
    CargarNuevoProducto: CargarNuevoProductoScreen,
    MisPublicaciones:MisPublicacionesScreen
  },
  {
    initialRouteName: 'Home',
    defaulfNavigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
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