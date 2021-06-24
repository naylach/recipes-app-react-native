import React, { useContext } from 'react';
import { FlatList, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { DataContext } from "../../context";

export default function HomeScreen(props) {
  const { catalogosList,setProductosList,url,setCatalogoSeleccionado} = useContext(DataContext);
  
  const onPressRecipe = item => {
    fetch(url+'catalogo/id?identificador='+item.identificador)
      .then((response) => response.json())
      .then((itm) => {
        console.log(`en el catalogo ${item.descripcion} seleccionado hay ${itm.length} productos`)
        setProductosList(itm)
        setCatalogoSeleccionado(item.descripcion)
        // fetchProductos
        props.navigation.navigate('Catalogo', { itm })
      });
  };

  const renderCatalogs = ({ item }) => (
      <TouchableHighlight underlayColor='#dfeef5' style={styles.touchable} onPress={() => onPressRecipe(item)}>
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item?.imagenes[0] }} />
          <Text style={styles.title}>{item.descripcion}</Text>
          <Text style={styles.category}>{item?.subasta?.categoria}</Text>
        </View>
      </TouchableHighlight>
  );
    return (
      <View>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={catalogosList}
          renderItem={renderCatalogs}
          keyExtractor={item => `${item.identificador}`}
        />
      </View>
    );
}