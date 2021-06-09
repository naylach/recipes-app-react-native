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
  getProductName,
  getAllProducts,
} from '../../data/MockDataAPI';

export default function ListadoProductosScreen(props) {
  const onPressProduct = item => {
    let name = getProductName(item.productoid);
    let product = item.productoid;
    props.navigation.navigate('EspecificacionProducto', { product, name });
  };

  //texto de la imagen redondita
  const renderProduct = ({ item }) => (
    <TouchableHighlight underlayColor='#dfeef5' style={{borderRadius: 50}} onPress={() => onPressProduct(item[0])}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item[0].photo_url }} />
        <Text style={styles.title}>{item[0].name}</Text>
        <Text style={{ color: 'grey' }}>{item[1]}</Text>
      </View>
    </TouchableHighlight>
  );
    const item = props.navigation.getParam('products');
    const ingredientsArray = getAllProducts(item);

    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={ingredientsArray}
          renderItem={renderProduct}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
}
