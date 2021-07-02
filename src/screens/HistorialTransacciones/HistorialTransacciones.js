import React, { useState, useContext, useEffect } from 'react';
import {
  ScrollView,
  Text,
  View,
  Image,
} from 'react-native';
import styles from './styles';
import { historial } from '../../data/dataArrays.js';
import { DataContext } from '../../context';

export default function HistorialTransacciones(props) {
  const { url, currentUser, productosList } = useContext(DataContext);
  const [historialPujas, setHistorialPujas] = useState({
    data:[],
    subastas: [],
  });
  const Separator = () => (
      <View style={styles.separator} />
    );
  const setLatestPujas = () => {
    fetch(
      url +
        "pujas/pujasRealizadas?cliente=" + currentUser?.idCliente)
      .then((response) => response.json())
      .then((res) => {
        console.log(
          "setHistorialPujas:\n" +
            JSON.stringify(res, null, 2) +
            "\n---------------"
        );

        setHistorialPujas(res);
      })
  }
  useEffect(() => {
    setLatestPujas();
  }, []);

  return (
      <ScrollView style={styles.mainContainer}>
      <View style={styles.container}>
          <View style={styles.row}>
              <View style={styles.header}>
                  <Image style={styles.image} source={require('../../../assets/icons/expense.png')}/>
                  <Text style={styles.title}>Compras</Text>
              </View>
              <Separator />
              {historialPujas?.data.map((transaccion, i) => {
                return <Text style={styles.item} key={i}>{`${transaccion.item} - ${transaccion.importe}`}</Text>})}
          </View>    
          <View style={styles.row}>
              <View style={styles.header}>
                  <Image style={styles.image} source={require('../../../assets/icons/wallet.png')}/>
                  <Text style={styles.title}>Ventas</Text>
              </View>
              <Separator />
              {historial.map((transaccion, i) => {
                return transaccion.tipo === "venta" ? <Text style={styles.item} key={i}>{`${transaccion.producto} - ${transaccion.monto}`}</Text> : null})}
          </View>
      </View>
    </ScrollView>

  );
}
