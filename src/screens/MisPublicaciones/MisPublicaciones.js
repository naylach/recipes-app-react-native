import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { getProductos } from "../../data/MockDataAPI";

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

  const renderItems = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.imagen }} />
        <Text style={styles.title}>{item.titulo}</Text>
        <Text style={styles.category}>{item.estado}</Text>
      </View>
    </TouchableHighlight>
  );
    return (
      <SafeAreaView>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={misproductos}
          renderItem={renderItems}
          keyExtractor={(item) => `${item.id}`}
        />
      </SafeAreaView>
    );
}