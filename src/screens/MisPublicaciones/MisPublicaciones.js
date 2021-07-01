import React, { useContext, useEffect, useState  } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { getProductos } from "../../data/MockDataAPI";
import { DataContext } from "../../context";

import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
} from "react-native";

import styles from "./styles";

export default function MisPublicaciones(props) {
  const [misProductos, setMisProductos] = useState([]);
  const {currentUser,url}= useContext(DataContext);
  const  fetchProductos=()=>{
    fetch(url+'productos/cliente?idCliente='+currentUser.idCliente)
      .then ((response)=> response.json())
      .then ((res)=>{
        console.log("productos de cliente:\n"+res+"\n---------------")
        setMisProductos(res)
      })
  }
  useEffect(()=>{
    if(misProductos.length===0){
    fetchProductos()
    }
  })
  
  const renderItems = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri:item.foto[0] } ||"https://static.thenounproject.com/png/568288-200.png" } />
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