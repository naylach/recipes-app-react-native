/* esta es la pantalla que hace relacionar con "otros lugares donde está este producto. habria que eliminarlo" */

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

export default class IngredientScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name')
    };
  };

  constructor(props) {
    super(props);
  }

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
    const ingredientId = navigation.getParam('ingredient');
    const ingredientUrl = getIngredientUrl(ingredientId);
    const ingredientName = navigation.getParam('name');
    return (
      <ScrollView style={styles.mainContainer}>
        <View style={{ borderBottomWidth: 0.4, marginBottom: 10, borderBottomColor: 'grey' }}>
          <Image style={styles.photoIngredient} source={{ uri: '' + ingredientUrl }} />
        </View>
        <Text style={styles.titleIngredient}>Descripción</Text>
        <Text style={styles.ingredientInfo}>Marca:</Text>
        <Text style={styles.ingredientInfo}>Modelo:</Text>
        <Text style={styles.ingredientInfo}>Estado:</Text>
        <Text style={styles.ingredientInfo}>Otros:</Text>
      </ScrollView>
    );
  }
}
