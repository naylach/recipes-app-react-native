import React, { useContext } from 'react';
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
import { DataContext } from "../../context";
import { recipes } from '../../data/dataArrays';

export default function ListadoProductosScreen(props) {
  const { productosList,url,setCurrentProducto  } = useContext(DataContext);
  const onPressProduct = item => {
    // let name = getProductName(item.identificador);
    // let product = item.identificador;

    fetch(url+'productos/producto/?id='+item.identificador)
      .then((response) => response.json())
      .then((producto) => {
          setCurrentProducto(producto)
          console.log(producto)
          let name = item.descripcionCatalogo;
          props.navigation.navigate('EspecificacionProducto', { producto, name });
        });
    
  };

  //texto de la imagen redondita
  const renderProduct = ({ item }) => (
    <TouchableHighlight underlayColor='#dfeef5' style={{borderRadius: 50}} onPress={() => onPressProduct(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.foto[0] }} />
        <Text style={styles.title}>{item.descripcionCatalogo}</Text>
        {/* //poner titulo */}
        <Text style={{ color: 'grey' }}>{item[1]}</Text>
      </View>
    </TouchableHighlight>
  );
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={3}
          data={productosList}
          renderItem={renderProduct}
          keyExtractor={item => `${item.identificador}`}
        />
      </View>
    );
}
