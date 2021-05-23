//Información del producto específico en el catálogo

import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
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
  }

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
      <ScrollView style={styles.mainContainer}>
        <View style={{ borderBottomWidth: 0.4, marginBottom: 10, borderBottomColor: 'grey' }}>
          <Image style={styles.photoIngredient} source={{ uri: '' + ingredientUrl }} />
        </View>
        <Text style={styles.titleIngredient}>Información</Text>
        <Text style={styles.ingredientInfo}>Nombre:</Text> 
        <Text style={styles.ingredientInfo}>Precio base:</Text>
        <Text style={styles.ingredientInfo}>Categoría:</Text>
        <Text>(arte, autos, etc. Según haya puesto el dueño cuando cargo el producto)</Text>
        <Text>(si la categoría es de arte u objetos de diseñador se muestran campos distintos) </Text>
        <Text style={styles.ingredientInfo}>Dueño Actual:</Text>
        <Text style={styles.ingredientInfo}>Descripción:</Text>
        <Text style={styles.ingredientInfo}>Número de pieza:</Text> 
        <Text>(lo asignan en el catalogo)</Text>
      </ScrollView>
    );
  }
}
