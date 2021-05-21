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

export default class MisPublicaciones extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Mis Publicaciones",
    };
  };

  constructor(props) {
    super(props);
  }

  // onPressRecipe = (item) => {
  //   this.props.navigation.navigate("Recipe", { item });
  // };

  renderItems = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.imagen }} />
        <Text style={styles.title}>{item.titulo}</Text>
        <Text style={styles.category}>{getProductos(item.id)}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <SafeAreaView>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={misproductos}
          renderItem={this.renderItems}
          keyExtractor={(item) => `${item.id}`}
        />
      </SafeAreaView>
    );
  }
}