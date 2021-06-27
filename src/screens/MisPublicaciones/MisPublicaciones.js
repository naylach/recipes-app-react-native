import React, { useContext, useEffect, useState  } from "react";

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
//import { misproductos } from "../../data/dataArrays";

import styles from "./styles";
import { misproductos } from "../../data/dataArrays";

export default function MisPublicaciones(props) {
  // onPressRecipe = (item) => {
  //   this.props.navigation.navigate("Recipe", { item });
  // };
  const [misProductos, setMisProductos] = useState([]);
  const {currentUser,url}= useContext(DataContext);
  const  fetchProductos=()=>{
    fetch(url+'productos/cliente?idCliente=9000')
      .then ((response)=> response.json())
      .then ((res)=>{
        console.log("productos de cliente:\n"+res.length+"\n---------------")
        setMisProductos(res)
      })
  }
  useEffect(()=>{
    if(misProductos.length===0){
    fetchProductos()
    }
  })
  // function fetchPublicacionesMine() {
  //   fetch(url+'productos/cliente/?idCliente=16')
  //     .then((response) => response.json())
  //     .then((res) => setPublicacionesMineList(res));
  // }
  // useLayoutEffect (()=>fetchPublicacionesMine)
 
  const renderItems = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri:item.foto[0] ||"https://static.thenounproject.com/png/568288-200.png" }} />
        <Text style={styles.title}>{item.descripcionCatalogo}</Text>
        <Text style={styles.category}>{item.disponible==='si' ? "En proceso":"Subastado"}</Text>
      </View>
    </TouchableHighlight>
  );
    return (
      <SafeAreaView>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={misProductos}
          renderItem={renderItems}
          keyExtractor={(item) => `${item.identificador}`}
        />
      </SafeAreaView>
    );
}