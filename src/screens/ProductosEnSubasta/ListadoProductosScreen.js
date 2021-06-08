import React from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import {
  getIngredientName,
  getAllIngredients,
} from '../../data/MockDataAPI';

export default function ListadoProductosScreen(props) {
  const onPressIngredient = item => {
    let name = getIngredientName(item.productoid);
    let ingredient = item.productoid;
    props.navigation.navigate('EspecificacionProducto', { ingredient, name });
  };

  //texto de la imagen redondita
  const renderIngredient = ({ item }) => (
    <TouchableHighlight underlayColor='#dfeef5' style={{borderRadius: 50}} onPress={() => onPressIngredient(item[0])}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item[0].photo_url }} />
        <Text style={styles.title}>{item[0].name}</Text>
        <Text style={{ color: 'grey' }}>{item[1]}</Text>
      </View>
    </TouchableHighlight>
  );
    const item = props.navigation.getParam('ingredients');
    const ingredientsArray = getAllIngredients(item);

    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={ingredientsArray}
          renderItem={renderIngredient}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
}
