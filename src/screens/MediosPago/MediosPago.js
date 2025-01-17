import React, { useState, useEffect, useContext } from "react";
import { Button, CheckBox } from "react-native-elements";
import ModalSelector from "react-native-modal-selector";
import { ScrollView, Text, View, Image, TextInput } from "react-native";
import styles from "./styles";
import Modal from "react-native-simple-modal";
import { DataContext } from "../../context";

export default function MediosPago(props) {
  const [tipo, setTipo] = useState(null);
  const [nombre, setNombre] = useState("");
  const [numero, setNumero] = useState("");
  const [vencimiento, setVencimiento] = useState("");
  const [cvv, setCVV] = useState("");
  const [tipoCuenta, setTipoCuenta] = useState("");
  const [CUIL, setCUIL] = useState("");
  const [CBU, setCBU] = useState("");
  const [alias, setAlias] = useState("");

  const [visibilityModal1, setVisibilityModal1] = useState(false);
  const [visibilityModal2, setVisibilityModal2] = useState(false);
  const [deleting, setDeleting] = useState(null);
  const [visibilityModalCreado, setVisibilityModalCreado] = useState(false);
  const [visibilityModalEliminado, setVisibilityModalEliminado] = useState(false);
  const [checked, setChecked] = useState(null);
  const [seleccionado, setSeleccionado] = useState("");
  const [visibilityModalError, setVisibilityModalError] = useState(false);
  const { tarjetas, setTarjetas, url, currentUser, cuentas, setCuentas } = useContext(DataContext);

  useEffect(() => {
    fetchCuentas();
    fetchTarjetas();
  }, [visibilityModalEliminado, visibilityModalCreado]);
  let index = 0;

  const data = [
    { key: index++, label: "Tarjeta" },
    { key: index++, label: "Cuenta bancaria" },
  ];
  const fetchTarjetas = () => {
    fetch(url + "tarjetas/?idCliente=" + currentUser.idCliente)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setTarjetas(res);
      });
  };
  const fetchCuentas = () => {
    fetch(url + "cuentasBancarias/?idCliente=" + currentUser.idCliente)
      .then((response) => response.json())
      .then((res) => {
        setCuentas(res);
      });
  }
  const openModal = () => setVisibilityModal1(true);
  const closeModal = () => {
    setVisibilityModal1(false);
    setTipo(null);
  };
  const openModal2 = () => setDeleting(checked);
  const closeModal2 = () => setDeleting(null);
  const openModalEliminado = () => {
    setVisibilityModalEliminado(true);
    setDeleting(null);
  };
  //pendiente de los ids iguales
  const openModalCreado = () => setVisibilityModalCreado(true);
  const openModalError = () => setVisibilityModalError(true);
  const todoBlanco = () => {
    setAlias("");
    setNombre("");
    setNumero("");
    setCBU("");
    setCUIL("");
    setCVV("");
    setCuentas("");
    setTipo(null);
  };

  const Separator = () => <View style={styles.separator} />;
  const closeModalEliminado = () => {
    setVisibilityModal2(false);
    setVisibilityModalEliminado(false);
    props.navigation.navigate("MediosPago");
  };
  const closeModalCreado = () => {
    setVisibilityModalCreado(false);
    setVisibilityModal1(false);
    props.navigation.navigate("MediosPago");
  };
  const closeModalError = () => {
    setVisibilityModalError(false);
    setVisibilityModal1(false);
    props.navigation.navigate("MediosPago");
  };
  const handleAgregarMedio = () => {
    console.log("handle agregar medio");
    if (tipo ==="Tarjeta"){
      console.log("tarjeta - handle agregar medio");
      const tarjetita = {
        numero: numero,
        nombre: nombre,
        vencimiento: vencimiento,
        cvv: cvv,
        estado: "en revision",
        usuario: {
          usuarioIdCliente: currentUser.idCliente, //hardcodeo (?)
          idCliente: currentUser.idCliente, //hardcodeo (?)Z
        },
      };
      const checkTextInput = (e) => {
        if (!nombre.trim()) {
          alert("Por favor, ingrese el nombre de la tarjeta");
          return;
        }
        if (!numero.trim()) {
          alert("Por favor, ingrese el numero de la tarjeta");
          return;
        }
        if (!cvv.trim()) {
          alert("Por favor, ingrese el cvv de la tarjeta");
          return;
        }
        if (!vencimiento.trim()) {
          alert("Por favor, indique el vencimiento de producto");
          return;
        }
        return true;
      };
      if (checkTextInput) {
        console.log(tarjetita);
        fetch(url + "tarjetas/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tarjetita),
        }).catch((error) => {
          console.error("Error tarjeta:", error);
        });
        closeModalCreado();
        openModalCreado();
      } else {
        openModalError();
      }
      todoBlanco;
    }
    else if (tipo === "Cuenta bancaria"){
      console.log("cuenta - handle agregar medio");
      const cuentaBancaria = {
        cbu: CBU,
        tipo: tipoCuenta,
        cuil: CUIL,
        alias: alias,
        usuario: {
          usuarioIdCliente: 1, //hardcodeo (?)
          idCliente: 1, //hardcodeo (?)
        },
      };
      const checkTextInput = (e) => {
        if (!CBU.trim()) {
          alert("Por favor, ingrese el CBU de la cuenta");
          return;
        }
        if (!tipoCuenta.trim()) {
          alert("Por favor, ingrese el tipo de cuenta");
          return;
        }
        if (!CUIL.trim()) {
          alert("Por favor, ingrese su numero de CUIL");
          return;
        }
        return true;
      };
      if (checkTextInput) {
        console.log(cuentaBancaria);
        fetch(url + "cuentasBancarias/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cuentaBancaria),
        }).catch((error) => {
          console.error("Error tarjeta:", error);
        });
        closeModalCreado();
        openModalCreado();
      } else {
        openModalError();
      }
      todoBlanco;

    }
  };
  const handleBorrarMedio = () => {
    if(seleccionado === "tarjeta"){
      fetch(url + "tarjetas/" + checked, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          openModalEliminado();
        }
      })
      .catch((error) => {
        console.error("Error deleting tarjeta:", error);
      });
    }
    else{
      fetch(url + "cuentasBancarias/" + checked, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          openModalEliminado();
        }
      })
      .catch((error) => {
        console.error("Error deleting cuenta:", error);
      });
    }
  };
  return (
    <ScrollView style={styles.mainContainer}>
      <View>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={require("../../../assets/icons/credit-card.png")}
          />
          <Text style={styles.title}>Tarjetas</Text>
        </View>
        <Separator />
        {tarjetas?.map((tarjeta, i) => {
          if (tarjeta.estado === "Aprobado") {
            return (
              <CheckBox
                key={i}
                checked={tarjeta.numero === checked}
                title={`${tarjeta.nombre}   **** ${tarjeta.numero.substr(
                  -4,
                  4
                )}`}
                style={styles.checkbox}
                onPress={() => {
                    setChecked(tarjeta.numero === checked ? null : tarjeta.numero);
                    setSeleccionado("tarjeta");
                  }
                }
              />
            );
          }
        })}
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={require("../../../assets/icons/bank.png")}
          />
          <Text style={styles.title}>Cuentas bancarias</Text>
        </View>
        <Separator />
        {cuentas?.map((cuenta, i) => {
          if (cuenta.estado == "Aprobado") {
            return (
              <CheckBox
                key={i}
                checked={cuenta.idCuentaBancaria === checked}
                title={`${cuenta.tipo}       **** ${cuenta.cbu.substr(-4, 4)}`}
                style={styles.checkbox}
                onPress={() => {
                  setChecked(cuenta.idCuentaBancaria === checked ? null : cuenta.idCuentaBancaria);
                  setSeleccionado("cuenta");}
                }
              />
            );
          }
        })}
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={require("../../../assets/icons/circles-loader.png")}
          />
          <Text style={styles.title}>En proceso de verificación</Text>
        </View>
        <Separator />
        {tarjetas?.map((tarjeta, i) => {
          if (tarjeta.estado != "Aprobado") {
            return (
              <CheckBox
                key={i}
                checked={tarjeta.numero === checked}
                title={`${tarjeta.nombre}       **** ${tarjeta.numero.substr(
                  -4,
                  4
                )}`}
                style={styles.checkbox}
                onPress={() => {
                  setChecked(tarjeta.numero === checked ? null : tarjeta.numero);
                  setSeleccionado("tarjeta");}
                }
              />
            );
          }
        })}
        {cuentas?.map((cuenta, i) => {
          if (cuenta.estado != "Aprobado") {
            return (
              <CheckBox
                key={i}
                checked={cuenta.idCuentaBancaria === checked}
                title={`${cuenta.tipo}       **** ${cuenta.cbu.substr(-4, 4)}`}
                style={styles.checkbox}
                onPress={() =>
                  setChecked(cuenta.idCuentaBancaria === checked ? null : cuenta.idCuentaBancaria)
                }
              />
            );
          }
        })}
        <View style={styles.buttonArea}>
          {!visibilityModal1 && (
            <Button
              style={styles.button}
              title="Nuevo"
              type="solid"
              onPress={openModal}
            />
          )}
          {!visibilityModal1 &&
            !visibilityModalCreado &&
            !visibilityModalEliminado && (
              <Button
                style={styles.button}
                title="Borrar"
                type="solid"
                onPress={openModal2}
              />
            )}
        </View>
        <Modal
          open={visibilityModal1}
          containerStyle={{
            justifyContent: "center",
            marginTop: 200,
          }}
          overlayStyle={{ backgroundColor: "transparent" }}
        >
          <View style={styles.mainModal}>
            <Text style={styles.modalTitle}>Nuevo medio de pago</Text>

            <View style={styles.modal}>
              <View style={styles.column}>
                <Text style={styles.modalLabel}>Tipo:</Text>
                {tipo === "Tarjeta" && (
                  <>
                    <Text style={styles.modalLabel}>Nombre:</Text>
                    <Text style={styles.modalLabel}>Número:</Text>
                    <Text style={styles.modalLabel}>Vencimiento:</Text>
                    <Text style={styles.modalLabel}>CVV:</Text>
                  </>
                )}
                {tipo === "Cuenta bancaria" && (
                  <>
                    <Text style={styles.modalLabel}>Tipo de cuenta:</Text>
                    <Text style={styles.modalLabel}>CUIL:</Text>
                    <Text style={styles.modalLabel}>CBU:</Text>
                    <Text style={styles.modalLabel}>Alias:</Text>
                  </>
                )}
              </View>
              <View style={styles.column}>
                {tipo === null && (
                  <ModalSelector
                    overlayStyle={{ backgroundColor: "transparent" }}
                    data={data}
                    initValue="Seleccionar"
                    margin="50"
                    style={styles.modalSelector}
                    type="solid"
                    key={tipo}
                    onChange={(texto) => {
                      setTipo(texto.label);
                    }}
                    backdropPressToClose={true}
                  />
                )}
                {tipo === "Tarjeta" && (
                  <>
                    <TextInput
                      style={styles.modalInput}
                      value={tipo}
                      editable={false}
                    ></TextInput>
                    <TextInput
                      style={styles.modalInput}
                      onChangeText={(text) => setNombre(text)}
                      value={nombre}
                    ></TextInput>
                    <TextInput
                      style={styles.modalInput}
                      onChangeText={(text) => setNumero(text)}
                      value={numero}
                    ></TextInput>
                    <TextInput
                      style={styles.modalInput}
                      onChangeText={(text) => setVencimiento(text)}
                      value={vencimiento}
                    ></TextInput>
                    <TextInput
                      style={styles.modalInput}
                      onChangeText={(text) => setCVV(text)}
                      value={cvv}
                    ></TextInput>
                  </>
                )}
                {tipo === "Cuenta bancaria" && (
                  <>
                    <TextInput
                      style={styles.modalInput}
                      value={tipo}
                      editable={false}
                    ></TextInput>
                    <TextInput
                      style={styles.modalInput}
                      onChangeText={(text) => setTipoCuenta(text)}
                      value={tipoCuenta}
                    ></TextInput>
                    <TextInput
                      style={styles.modalInput}
                      onChangeText={(text) => setCUIL(text)}
                      value={CUIL}
                    ></TextInput>
                    <TextInput
                      style={styles.modalInput}
                      onChangeText={(text) => setCBU(text)}
                      value={CBU}
                    ></TextInput>
                    <TextInput
                      style={styles.modalInput}
                      onChangeText={(text) => setAlias(text)}
                      value={alias}
                    ></TextInput>
                  </>
                )}
              </View>
            </View>
            <View style={styles.columns}>
              <Button
                style={styles.modalButton}
                title="Agregar"
                type="solid"
                onPress={handleAgregarMedio}
              />
              <Button
                style={styles.modalButton}
                title="Cerrar"
                type="solid"
                onPress={closeModal}
              />
            </View>
          </View>
        </Modal>
        <Modal
          open={visibilityModalCreado}
          containerStyle={{
            justifyContent: "center",
            marginTop: 200,
          }}
          overlayStyle={{ backgroundColor: "transparent" }}
        >
          <View style={styles.confirmationModal}>
            <Text style={styles.modalTitle}>
              Medio de pago en proceso de verificación
            </Text>
            <Image
              style={styles.imageModal}
              source={require("../../../assets/icons/check.png")}
            />
            <Button
              style={styles.modalButton}
              title="Aceptar"
              type="solid"
              onPress={closeModalCreado}
            />
          </View>
        </Modal>
        <Modal open={visibilityModalError}>
          <View style={styles.confirmationModal}>
            <Text style={styles.modalTitle}>
              Los datos ingresados están incompletos
            </Text>
            <Image
              style={styles.imageModal}
              source={require("../../../assets/icons/cancel.png")}
            />
            <Button
              style={styles.modalButton}
              title="Aceptar"
              type="solid"
              onPress={closeModalError}
            />
          </View>
        </Modal>
        <Modal
          open={deleting !== null}
          containerStyle={{
            justifyContent: "center",
            marginTop: 200,
          }}
          overlayStyle={{ backgroundColor: "transparent" }}
        >
          <View style={styles.confirmationModal}>
            <Text style={styles.modalTitle}>
              ¿Está seguro de que desea borrar el medio de pago seleccionado?
            </Text>
            <View style={styles.columns}>
              <Button
                style={styles.modalButton}
                title="Sí"
                type="solid"
                onPress={handleBorrarMedio}
              />
              <Button
                style={styles.modalButton}
                title="No"
                type="solid"
                onPress={closeModal2}
              />
            </View>
          </View>
        </Modal>
        <Modal
          open={visibilityModalEliminado}
          containerStyle={{
            justifyContent: "center",
            marginTop: 200,
          }}
          overlayStyle={{ backgroundColor: "transparent" }}
        >
          <View style={styles.confirmationModal}>
            <Text style={styles.modalTitle}>Medio de pago eliminado</Text>
            <Image
              style={styles.imageModal}
              source={require("../../../assets/icons/check.png")}
            />
            <Button
              style={styles.modalButton}
              title="Aceptar"
              type="solid"
              onPress={closeModalEliminado}
            />
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}
