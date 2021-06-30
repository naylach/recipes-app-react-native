//Información del producto específico en el catálogo

import React, { useEffect, useState, useContext } from "react";
import {
  Modal,
  Animated,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  TouchableHighlight,
} from "react-native";
import styles from "./styles";
import { Button } from "react-native-elements";
import { DataContext } from "../../context";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { StatusBar } from "expo-status-bar";
import ModalSelector from "react-native-modal-selector";

export default function EspecificacionProductoScreen(props) {
  const { url, currentUser, currentProducto, catalogoSeleccionado, primeraSubasta, setPrimeraSubasta, currentSubasta, setCurrentSubasta } = useContext(DataContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [importe, setImporte] = useState(0);
  const [elegido, setElegido] = useState();
  const [data, setData] = useState();
  const [pujaFinalizada, setpujaFinalizada] = useState(false);
  const [timer, setTimer] = useState(300);
  const [keyTimer, setkeyTimer] = useState(0);
  const [ tarjetas, setTarjetas ] = useState([]);
  const [latestPujas, setLatestPuja] = useState({
    identificador: 0,
    asistente: 0,
    item: 0,
    importe: currentProducto?.ItemsCatalogo?.precioBase,
    ganador: "no",
  });
  const item = props?.navigation?.state?.params?.producto[0];

  // console.log(
  //   "\n\n\n======================================================================="
  // );
  // console.log ("Especificacion de Producto (item)=>"+JSON.stringify(item,null,2))
  // console.log("producto (currentProducto)=>"+JSON.stringify(currentProducto,null,2))

  function fetchLatestPuja() {
    console.log(
      "fetch pujas con id: " + currentProducto?.ItemsCatalogo?.identificador
    );
    console.log(primeraSubasta);
    fetch(
      url +
        "pujas/latest?itemCatalogo=" +
        currentProducto?.ItemsCatalogo?.identificador
    )
      .then((response) => response.json())
      .then((res) => {
        console.log("type of", typeof res);
        console.log("res", res);
        console.log(
          "setLatestPuja:\n" +
            JSON.stringify(res, null, 2) +
            "\n---------------"
        );
  
          setLatestPuja(res);
      })
      // .catch((res) => {
      //   console.log("errorcito", res);
      //   setLatestPuja(currentProducto?.ItemsCatalogo?.precioBase);
      // });
  }
  useEffect(() => {
    console.log("user effect");

    fetchLatestPuja();
    console.log(JSON.stringify(props, null, 2));
    let timeout = window.setInterval(() => {
      fetchLatestPuja();
      //  console.log("pasaron 5s");
    }, 5000);

    return () => window.clearInterval(timeout);
  }, []);

  const getTarjetasAprobadas = () => {
    var auxiliar = [];
    fetch(url + "tarjetas/?idCliente=" + currentUser?.idCliente)
      .then((response) => response.json())
      .then((res) => setTarjetas(res));
    tarjetas.map((tarjeta, i) => {
      if (tarjeta.estado === "Aprobado") {
        auxiliar.push({
          key: tarjeta.idTarjeta,
          label: tarjeta.nombre + " XXXX " + tarjeta.numero.substring(12, 16),
        });
        console.log(auxiliar);
      }
      setData(auxiliar);
    });
  }
  const handlePujaModalActiva = () => {
    getTarjetasAprobadas();
    setImporte(latestPujas.importe);
    setModalVisible(true);
  }

  const handlePuja = () => {
    //api pujas aqui
    console.log("LLEGA ACA");
    const nuevaPuja = {
      cliente: currentUser?.idCliente,
      subasta: catalogoSeleccionado.subasta?.identificador,
      importe: importe,
      itemCatalogo: currentProducto?.ItemsCatalogo?.identificador,
      categoria: catalogoSeleccionado?.subasta?.categoria,
      idMedioDePago: elegido, // Hay que agregar el id del medio de pago correspondientes (no importa si tarjeta o cuenta)
    };
    // console.log(nuevaPuja);
    console.log(nuevaPuja);

    if (nuevaPuja.importe > 1.01 * currentProducto.ItemsCatalogo.precioBase) {
      console.log("###PASA EL PRIMERO###");

      if (
        !(nuevaPuja.categoria === "oro") &&
        !(nuevaPuja.categoria === "platino")
      ) {
        if (nuevaPuja.importe > 1.2 * latestPujas.importe) {
          alert("El limite de puja actual es de: " + 1.2 * latestPujas.importe);
          return;
        }
      }
      if (nuevaPuja.importe > latestPujas.importe) {
        console.log("###dentro del fetch###");
        fetch(url + "pujas/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },

          body: JSON.stringify({ ...nuevaPuja }),
        })
          .then((response) => {
            //console.log(response.status+": "+JSON.stringify(response))
            return response.json();
          })
          .then((res) => {
            console.log("Puja Realizada" + JSON.stringify(res));
            setModalVisible(false);
          });
        setModalVisible(false);
        setkeyTimer(keyTimer + 1);
        setCurrentSubasta(catalogoSeleccionado.subasta);
        setPrimeraSubasta(0);
        alert("Tienes la puja mas alta"); ///sacar si molesta, el mensaje es posiblemente muy corto
      }
    } else {
      alert(
        "La puja tiene que ser mayor a: " +
          (latestPujas.importe > currentProducto.ItemsCatalogo.precioBase * 1.01
            ? latestPujas.importe
            : currentProducto.ItemsCatalogo.precioBase * 1.01)
      );
    }
  };

  //const producto = props.navigation.getParam('producto');
  let index = 0;
  const children = (remainingTime) => {
    if (remainingTime === 0) {
      setpujaFinalizada(true);
      return "Finalizado";
    }
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds}`;
  };

  return (
    <View style={{ marginBottom: 10 }}>
      <StatusBar style="auto" />
      {catalogoSeleccionado?.subasta?.estado === "abierta" && 
        <Text style={styles.titleIngredient}>
          Última puja: $
          {latestPujas.importe === 0 ? "Loading..." : latestPujas.importe}
        </Text>
      }
      <Image style={styles.photoIngredient} source={{ uri: item.foto[0] }} />
      <Text style={styles.titleIngredient}>Información</Text>
      <Text style={styles.ingredientInfo}>
        Precio base: {currentProducto?.ItemsCatalogo?.precioBase}{" "}
      </Text>
      <Text style={styles.ingredientInfo}>
        Dueño Actual: {currentProducto?.duenio}{" "}
      </Text>
      <Text style={styles.ingredientInfo}>
        Descripción: {currentProducto?.descripcionCompleta}{" "}
      </Text>
      <Text style={styles.ingredientInfo}>
        Número de pieza: {currentProducto?.identificador}{" "}
      </Text>

      <View style={styles.TimeContainer}>
        <CountdownCircleTimer
          key={keyTimer}
          isPlaying
          duration={timer}
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

      { (primeraSubasta === 1 || (currentUser?.categoria === catalogoSeleccionado?.subasta?.categoria 
      && catalogoSeleccionado?.subasta?.estado === "abierta" 
      && catalogoSeleccionado?.subasta?.identificador === currentSubasta.identificador 
      ))
      && 
        <Button
          title="Pujar"
          style={styles.buttonLogin}
          disabled={pujaFinalizada}
          onPress={handlePujaModalActiva}
        />
      }

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
            <TextInput
              style={styles.txtInput}
              placeholder="$"
              onChangeText={text => {
                console.log(text);
                setImporte(parseInt(text));
              }}
            ></TextInput>

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
                setElegido(texto.key);
              }}
              backdropPressToClose={true}
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
