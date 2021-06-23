//Información del producto específico en el catálogo

import { getEspecificacionProductos } from "../../data/MockDataAPI";

import React, { useEffect, useState, useContext } from "react";
import {
  Modal,
  Animated,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import styles from "./styles";
import { Button } from "react-native-elements";
import { getProductUrl } from "../../data/MockDataAPI";
import { DataContext } from "../../context";
import { pujas1 } from "../../data/dataArrays.js";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { StatusBar } from "expo-status-bar";

import ModalSelector from "react-native-modal-selector";

export default function EspecificacionProductoScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [pujas, setPujas] = useState(pujas1);
  const { currentProducto } = useContext(DataContext);
  const [elegido, setElegido] = useState("");
  const { tarjetas, setTarjetas, url, currentUser } = useContext(DataContext);
  const [data, setData] = useState([]);

  // var data = [
  //   { key: index++, label: "Tarjeta" },
  //   { key: index++, label: "Cuenta bancaria" },
  // ];

  // const TraerActivos = () => {
  //   //  fetch(url + "tarjetas/?idCliente=" + currentUser.idCliente)
  //   fetch("http://192.168.1.29:8080/api/tarjetas/?idCliente=1")
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log(res);
  //       setTarjetas(res);
  //      });
  //    console.log("NAY - tarjetas en la db", tarjetas);
  //   tarjetas.map((tarjeta, i) => {
  //     if (tarjeta.estado === "Aprobado") {
  //       data.push({ key: index++, label: tarjeta.nombre });
  //     }
  //     console.log("ACA DATA", data);
  //   });
  // };

  useEffect(() => {
    setInterval(() => {
      //API DE PUJAS
      for (const puja of pujas) {
        if (
          !pujas.find((p) => {
            if (p.id === puja.id) return true;
            return false;
          })
        ) {
          const p = pujas.concat(puja);
          setPujas(p);
        }
      }
    }, 2000);
  }, []);

  async function handlePujaModalActiva() {
    // TraerActivos;
    // await fetch(url + "tarjetas/?idCliente=" + currentUser.idCliente)
    var auxiliar = [];
    await fetch("http://192.168.1.29:8080/api/tarjetas/?idCliente=1")
      .then((response) => response.json())
      .then((res) => {
        setTarjetas(res);
      });
    tarjetas.map((tarjeta, i) => {
      if (tarjeta.estado === "Aprobado") {
        auxiliar.push({
          key: index++,
          label: tarjeta.nombre + " XXXX " + tarjeta.numero.substring(12, 16),
        });
      }
      setData(auxiliar);
    });

    setModalVisible(true);
  }

  const handlePuja = () => {
    //api pujas aqui

    setModalVisible(false);
  };
  //const producto = props.navigation.getParam('producto');
  let index = 0;
  const children = (remainingTime) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds}`;
  };

  const [isPlaying, setIsPlaying] = React.useState(true);

  return (
    <View style={{ marginBottom: 10 }}>
      <StatusBar style="auto" />
      {pujas.length > 0 && (
        <Text style={styles.titleIngredient}>
          Última puja: ${pujas[pujas.length - 1].importe}
        </Text>
      )}
      <Image
        style={styles.photoIngredient}
        source={{ uri: currentProducto[0]?.foto }}
      />
      <Text style={styles.titleIngredient}>Información</Text>
      <Text style={styles.ingredientInfo}>
        Precio base: {currentProducto[0]?.precioBase}{" "}
      </Text>
      {/* <Text style={styles.ingredientInfo}>Tipo de producto:  {producto} </Text> */}
      <Text style={styles.ingredientInfo}>
        Dueño Actual: {currentProducto[0]?.duenio}{" "}
      </Text>
      <Text style={styles.ingredientInfo}>
        Descripción: {currentProducto[0]?.descripcionCompleta}{" "}
      </Text>
      <Text style={styles.ingredientInfo}>
        Número de pieza: {currentProducto[0]?.identificador}{" "}
      </Text>

      <View style={styles.TimeContainer}>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={300}
          size={100}
          colors={[
            ["#004777", 0.4],
            ["#1EC6ff", 0.4],
            ["#A30000", 0.2],
          ]}
        >
          {({ remainingTime, animatedColor }) => (
            <Animated.Text style={{ color: animatedColor, fontSize: 20 }}>
              {children(remainingTime)}
            </Animated.Text>
          )}
        </CountdownCircleTimer>
      </View>

      {1 === 1 && (
        <Button
          title="Pujar"
          style={styles.buttonLogin}
          onPress={handlePujaModalActiva}
        />
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>¿Cuánto desea pujar?</Text>
            <TextInput style={styles.txtInput}>$ </TextInput>
            <Text style={styles.modalText}>Seleccionar medio de pago</Text>

            <ModalSelector
              overlayStyle={{ backgroundColor: "transparent" }}
              data={data}
              initValue="Seleccionar"
              margin="50"
              style={styles.modalSelector}
              type="solid"
              key={elegido}
              onChange={(texto) => {
                setElegido(texto.label);
              }}
              backdropPressToClose="true"
            />

            <View style={styles.columns}>
              <Pressable
                style={[styles.button, styles.buttonAcept]}
                onPress={handlePuja}
              >
                <Text style={styles.textStyle}>Confirmar</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
