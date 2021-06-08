//CATALOGO PARTE 2 
//Aca está el titulo del catalogo (ex recipie que no encontrabamos)

import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import styles from './styles';
import { getRecipes, getCategoryName } from '../../data/MockDataAPI';

export default function RecipesListScreen (props) {
  const onPressRecipe = item => {
    props.navigation.navigate('Catalogo', { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
        <Text>holaaa</Text>
    </TouchableHighlight>
  );


    const item = props.navigation.getParam('category');
    const recipesArray = getRecipes(item.id);
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipesArray}
          renderItem={renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
}