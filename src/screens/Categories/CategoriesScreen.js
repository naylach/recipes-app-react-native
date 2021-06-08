import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import { categories } from '../../data/dataArrays';
import { getNumberOfRecipes } from '../../data/MockDataAPI';

export default function CategoriesScreen (props) {

  const onPressCategory = item => {
    const title = item.name;
    const category = item;
    props.navigation.navigate('RecipesList', { category, title });
  };

  const renderCategory = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)' onPress={() => onPressCategory(item)}>
      <View style={styles.categoriesItemContainer}>
        <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.categoriesName}>{item.name}</Text>
        <Text style={styles.categoriesInfo}>{getNumberOfRecipes(item.id)} catálogos</Text>
      </View>
    </TouchableHighlight>
  );

  return (
      <View>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
}