import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
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
    Recipe: RecipeScreen,
    RecipesList: RecipesListScreen,
    Ingredient: IngredientScreen,
    Search: SearchScreen,
    IngredientsDetails: IngredientsDetailsScreen,
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
    // headerMode: 'float',
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