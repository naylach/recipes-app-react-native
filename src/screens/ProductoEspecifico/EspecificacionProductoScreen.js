//Información del producto específico en el catálogo

import React from 'react';
import {
  Modal,
  Text,
  View,
  Image,
  Pressable,
  TouchableHighlight,TextInput
} from 'react-native';
import styles from './styles';
import { Button } from 'react-native-elements'

import ModalNuevoProducto from "./modalcomponent"

import productosDetails from '../../data/MockDataAPI';
import {
  getIngredientUrl,
  getRecipesByIngredient,
  getCategoryName
} from '../../data/MockDataAPI';

export default class EspecificacionProductoScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name')
    };
  };
  constructor(props) {
    super(props);
    this.state={
      modalVisible: false
    }
  }


 handleAgregarMedio = () => {
  this.setState({modalVisible: false});
  };


  //creo que no sirve
  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressRecipe(item)}>
      <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => this.onPressRecipe(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.photo_url }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
        </View>
      </TouchableHighlight>
    </TouchableHighlight>
  );

  render() {
    const { navigation } = this.props;
    const productoid = navigation.getParam('ingredient');
    const ingredientUrl = getIngredientUrl(productoid);
    const ingredientName = navigation.getParam('name');
    return (
        <View style={{ borderBottomWidth: 0.4, marginBottom: 10, borderBottomColor: 'grey' }}>
          <Image style={styles.photoIngredient} source={{ uri: '' + ingredientUrl }} />
     
        <Text style={styles.titleIngredient}>Información</Text>
        {/* <Text style={styles.ingredientInfo}>Nombre: {productosDetails.getEspecificacionProductos(1)}  </Text>  */}
        <Text style={styles.ingredientInfo}>Precio base:</Text>
        <Text style={styles.ingredientInfo}>Tipo de producto:</Text>
        <Text style={styles.nayla}>(arte, autos, etc. Según haya puesto el dueño cuando cargo el producto)</Text>
        <Text style={styles.nayla}>(si la categoría es de arte u objetos de diseñador se muestran campos distintos) </Text>
        <Text style={styles.ingredientInfo}>Dueño Actual:</Text>
        <Text style={styles.ingredientInfo}>Descripción:</Text>
        <Text style={styles.ingredientInfo}>Número de pieza:</Text> 
        <Text style={styles.nayla}>(lo asignan en el catalogo)</Text>
      
            <Button
              title='Pujar'
              style={styles.buttonLogin}      
              onPress={() => this.setState({modalVisible: true}) }/>

<Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!this.state.modalVisible);
        }}>
                  <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>¿Cuánto desea pujar?</Text>
            <TextInput style={styles.txtInput}>$ </TextInput>
            
            <View style={styles.columns}>
            <Pressable
              style={[styles.button, styles.buttonAcept]}
              onPress={() => this.setState({modalVisible: false})}
            >
              <Text style={styles.textStyle}>Confirmar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => this.setState({modalVisible: false})}
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>

   </View>
    );
  }
}
