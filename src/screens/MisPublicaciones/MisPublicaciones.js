import React, { useContext, useLayoutEffect  } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { getProductos } from "../../data/MockDataAPI";
import { DataContext } from "../../context";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
} from "react-native";
import { misproductos } from "../../data/dataArrays";

import styles from "./styles";

export default function MisPublicaciones(props) {
  // onPressRecipe = (item) => {
  //   this.props.navigation.navigate("Recipe", { item });
  // };

  const { publicacionesMineList,url}= useContext(DataContext);

  // function fetchPublicacionesMine() {
  //   fetch(url+'productos/cliente/?idCliente=16')
  //     .then((response) => response.json())
  //     .then((res) => setPublicacionesMineList(res));
  // }
  // useLayoutEffect (()=>fetchPublicacionesMine)
  
  console.log(publicacionesMineList)
  const renderItems = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.foto }} />
        <Text style={styles.title}>{item.descripcionCatalogo}</Text>
        <Text style={styles.category}>{item.disponible==='si' ? "En proceso de subasta":"Subastado"}</Text>
      </View>
    </TouchableHighlight>
  );
    return (
      <SafeAreaView>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={publicacionesMineList}
          renderItem={renderItems}
          keyExtractor={(item) => `${item.id}`}
        />
      </SafeAreaView>
    );
}